import React, { useEffect } from "react"
import "./ShopDisplay.css"
import { useState } from "react"
import { addBasketList, removeBasketList } from "../../store/basket"
import { useDispatch, useSelector } from "react-redux"

const arr = [
  {
    name: "Red",
    nickname: "red",
    img: "/red.png",
    price: 220,
    count: 1,
    id: 1
  },
  {
    name: "Blue",
    nickname: "blue",
    img: "/blue.png",
    price: 130,
    count: 1,
    id: 2
  },
  {
    name: "Brown",
    nickname: "brown",
    img: "/brown.png",
    price: 90,
    count: 1,
    id: 3
  },
  {
    name: "Sand",
    nickname: "sand",
    img: "/sand.png",
    price: 200,
    count: 1,
    id: 4
  },
  {
    name: "Orange",
    nickname: "orange",
    img: "/orange.png",
    price: 120,
    count: 1,
    id: 5
  },
  {
    name: "Violet",
    nickname: "violet",
    img: "/blue.png",
    price: 80,
    count: 1,
    id: 6
  }
]

export default function ShopDisplay() {
  const [displayNum, setDisplayNum] = useState(arr.slice(0, 3))
  const [showButton, setShowButton] = useState(true)
  //获取购物车中的数据：
  const list = useSelector(state => state.basketStore.basketList)
  useEffect(() => {
    console.log("list", list)
  })

  //定义dispatch for later use:
  const dispatch = useDispatch()

  const showMore = () => {
    setDisplayNum(arr)
    setShowButton(false)
  }

  let findFn = id => list.find(v => v.id === id)
  //addBasket
  const addBasket = id => {
    console.log("添加到购物车", "id", id)
    //点击哪个眼镜，把数据添加到store里
    let item = arr.find(v => v.id === id)
    console.log("item", item)
    dispatch(addBasketList(item))
  }

  //remove basket
  const removeFn = id => {
    dispatch(removeBasketList(id))
  }
  return (
    <div className="WholeDisplay">
      <div className="WholeDisplay-center">
        <div className="product-list">
          {displayNum.map((item, index) => (
            <div key={item.id} className="item">
              <div className="img-div">
                <img src={item.img} alt="" />
              </div>

              <h3>{item.name}</h3>
              <p>{item.nickname}</p>
              <h2 className="shop-price">${item.price}</h2>
              {/* 添加到购物车 */}
              <div
                className={findFn(item.id) ? "add-basket remove-basket" : "add-basket"}
                onClick={() => {
                  findFn(item.id) ? removeFn(item.id) : addBasket(item.id)
                }}
              >
                {findFn(item.id) ? "remove from basket" : "Add to basket"}
              </div>
            </div>
          ))}
        </div>
        {showButton && (
          <button onClick={showMore} className="moreItems">
            show more items
          </button>
        )}
      </div>
    </div>
  )
}
