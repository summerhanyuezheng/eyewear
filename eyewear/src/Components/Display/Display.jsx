import React from "react"
import "./Display.css"
import { useState } from "react"
import { Link } from "react-router-dom"

const home_arr = [
  {
    name: "Red",
    nickname: "red",
    img: "/red.png",
    price: "$80",
    id: 1
  },
  {
    name: "Blue",
    nickname: "blue",
    img: "/blue.png",
    price: "$80",
    id: 2
  },
  {
    name: "Brown",
    nickname: "brown",
    img: "/brown.png",
    price: "$80",
    id: 3
  }
]

const arr2 = [
  {
    name: "Sand",
    nickname: "sand",
    img: "/sand.png",
    price: "$80",
    id: 4
  },
  {
    name: "Cherry",
    nickname: "cherry",
    img: "/cherry.png",
    price: "$80",
    id: 5
  },
  {
    name: "Blue",
    nickname: "blue",
    img: "/blue.png",
    price: "$80",
    id: 6
  }
]

export default function Display({ headerText = "Featured Products", seeAllLink = "/featured", seeAllText = "See All" }) {
  const [homeDisplay, setHomeDisplay] = useState(home_arr)
  const [homeDisplay2, setHomeDisplay2] = useState(arr2)

  return (
    <div className="WholeDisplay">
      <div className="home-WholeDisplay-center">
        <div className="home-headers">
          <h1 className="home-main-header">{headerText}</h1>
          <h5 className="home-sub-header">
            <Link to={seeAllLink}>{seeAllText}</Link>
          </h5>
        </div>

        <div className="home-product-list">
          {homeDisplay.map((item, index) => (
            <Link to={`/detail/${item.id}`}>
              <div key={item.id} className="home-product-display">
                <img src={item.img} alt="" />
                <h3 className="product-name">{item.name}</h3>
                <p className="product-nickname">{item.nickname}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="home-product-list">
          {homeDisplay2.map((item, index) => (
            <Link to={`/detail/${item.id}`}>
              <div key={item.id} className="home-product-display">
                <img src={item.img} alt="" />
                <h3 className="product-name">{item.name}</h3>
                <p className="product-nickname">{item.nickname}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
