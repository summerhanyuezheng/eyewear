import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { addBasketList, removeBasketList } from "../../store/basket"
import ".././Shop/ShopDisplay.css"
import "../SearchBar/SearchCom.css"

const products = [
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

export default function SearchCom() {
  const { searchTerm } = useParams()
  const dispatch = useDispatch()
  const basketList = useSelector(state => state.basketStore.basketList)

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.nickname.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(item => {
          const inBasket = basketList.some(basketItem => basketItem.id === item.id)
          return (
            <div key={item.id} className="list-center">
              <div className="item">
                <div className="img-div">
                  <img src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.nickname}</p>
                <h2 className="shop-price">${item.price}</h2>
                <button
                  className={inBasket ? "add-basket remove-basket" : "add-basket"}
                  onClick={() => {
                    inBasket ? dispatch(removeBasketList(item.id)) : dispatch(addBasketList(item))
                  }}
                >
                  {inBasket ? "Remove from basket" : "Add to basket"}
                </button>
              </div>
            </div>
          )
        })
      ) : (
        <div className="not-found-center">
          <div className="not-found">
            <h3>No products found.</h3>
          </div>
        </div>
      )}
    </div>
  )
}
