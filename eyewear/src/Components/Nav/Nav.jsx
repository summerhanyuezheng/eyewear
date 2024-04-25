import React, { useEffect } from "react"
import "./Nav.css"
import { NavLink, Link, useNavigate } from "react-router-dom"

import { useState } from "react"
import Box from "@mui/material/Box"

import Button from "@mui/material/Button"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { clearBasketList, additemCount, decrementCount, removeBasketList } from "../../store/basket"
import { useDispatch } from "react-redux"
import { legacy_createStore } from "@reduxjs/toolkit"

export default function Nav({ SignUp = "Sign Up", LogIn = "Log In" }) {
  //搜索功能
  const [searchInput, setSearchInput] = useState("")

  //搜索区onChange
  const handleSearchChange = event => {
    setSearchInput(event.target.value)
    console.log("event.target.value", event.target.value)
  }

  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    right: false
  })

  //    跳转路由
  const navigate = useNavigate()
  //onKeyPress,搜索区按下enter时trigger
  const performSearch = () => {
    navigate(`/search/${searchInput}`)
  }

  //获取store中的basketList
  const basketList = useSelector(state => state.basketStore.basketList)
  useEffect(() => console.log(basketList))

  const totalAmount = basketList.reduce((sum, v) => sum + v.count * v.price, 0)

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  //数量加减
  const countPlus = id => {
    console.log("+")
    dispatch(additemCount(id))
  }

  const countMinus = id => {
    console.log("-")
    dispatch(decrementCount(id))
  }

  //清空购物车
  const clearFn = () => {
    console.log("清空")
    dispatch(clearBasketList())
  }
  //这里的list就是购物车中的数据
  const list = anchor => (
    <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 600 }} role="presentation" onKeyDown={toggleDrawer(anchor, false)}>
      <div className="locate-totalAmount">
        <div className="cart-content">
          <div className="top-basket">
            <p>
              {" "}
              <span className="myBasket">My Basket</span>
              {"        "}({basketList.length} items)
            </p>
            {/* 关闭抽屉 */}
            <div className="close-and-clear">
              <button onClick={toggleDrawer(anchor, false)}>close</button>
              <button className="clear" onClick={clearFn}>
                clear basket
              </button>
            </div>
          </div>

          {basketList.map(item => (
            <div className="shopping-cart-item" key={item.id}>
              <div className="add-minus">
                <button
                  onClick={() => {
                    countPlus(item.id)
                  }}
                >
                  +
                </button>
                <button
                  disabled={item.count <= 1 ? true : false}
                  onClick={() => {
                    countMinus(item.id)
                  }}
                >
                  -
                </button>
              </div>
              <div className="img-basket">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="name-and-quantity">
                <p className="name-basket">{item.name}</p>
                <div className="count-basket">
                  <p className="quantity-text">Quantity</p>
                  <p className="count-text">{item.count}</p>
                </div>
              </div>

              <p className="price-basket">${item.price * item.count}</p>
              <button
                className="X"
                onClick={() => {
                  dispatch(removeBasketList(item.id))
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>

        {/* 计算总金额 */}
        <p className="totalAmount">
          <span>total Amount:</span>
          <br></br>
          <p>${totalAmount}</p>
        </p>
      </div>
    </Box>
  )

  return (
    <div className="wholeNav">
      <div className="wholeNav-container">
        <div className="logo-pic"></div>
        <ul className="wholeNav-pages">
          <li>
            {" "}
            <NavLink className={({ isActive }) => (isActive ? "active" : "disable")} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className={({ isActive }) => (isActive ? "active" : "disable")} to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "disable")} to="/featured">
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "disable")} to="/recommended">
              Recommended
            </NavLink>
          </li>
        </ul>

        <div className="wholeNav-right">
          <input
            className="searchBar
        "
            type="search"
            name=""
            id=""
            placeholder="search product"
            value={searchInput}
            onChange={handleSearchChange}
            onKeyPress={event => {
              if (event.key === "Enter") {
                performSearch()
              }
            }}
          />
          <div className="signOption">
            {/* <DrawerCom buttonContent={<div className="shop-img"></div>} /> */}

            <div className="drawer">
              {["right"].map(anchor => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <div className="shop-img">
                      {basketList.length > 0 && (
                        <div className="red-circle">
                          <span>{basketList.length}</span>
                        </div>
                      )}
                    </div>
                  </Button>
                  <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>

            <Link className="signUp" to="/signup">
              {SignUp}
            </Link>

            <Link className="logIn" to="/login">
              {LogIn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
