import React from "react"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "../Details/DetailCom.css"
import { useDispatch } from "react-redux"
import { addBasketList, removeBasketList } from "../../store/basket"
import { useSelector } from "react-redux/es/hooks/useSelector"

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
    name: "Cherry",
    nickname: "cherry",
    img: "/cherry.png",
    price: "80",
    id: 5
  },
  {
    name: "Blue",
    nickname: "blue",
    img: "/blue.png",
    price: 130,
    count: 1,
    id: 6
  }
]
export default function DetailCom() {
  const { id } = useParams()
  const [item, setItem] = useState(products.find(v => v.id == id))
   // State to track the selected color
   const [selectedColor, setSelectedColor] = useState('');

   // Handler function when a color is clicked
   const handleColorClick = (color) => {
     setSelectedColor(color);
   };
 


  // React to changes in route parameters
  useEffect(() => {
    // Scroll to top whenever the product ID changes
    window.scrollTo(0, 0);
    // This dependency array tells React to re-run the effect when 'id' changes
    setItem(products.find(v => v.id == id));
  }, [id]);  
  

  
  //for select size part
  const [size, setSize] = useState("")
  const handleChange = event => {
    setSize(event.target.value)
  }
  //购物车部分
  const dispatch = useDispatch()
  const basketList = useSelector(state => state.basketStore.basketList)
  const inBasket = basketList.some(basketItem => basketItem.id === item.id)

  return (
    <div className="whole-detail">
      <div className="detail-center">
        <div className="detail-left">
          <img src={item.img} alt="" />
        </div>
        <div className="detail-img">
          <img src={item.img} alt="" />
        </div>
        <div className="detail-right">
          <p className="detail-name">{item.name}</p>
          <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, sit nesciunt debitis alias veniam in tenetur libero dolor amet, quidem ab cumque sint animi voluptatem. </p>
          <div className="select-size">
            <label className="size-text" htmlFor="size-combo">
              Lens Width and Frame Size
            </label>{" "}
            <br />
            <input className="input-area" list="sizes" id="size-combo" value={size} onChange={handleChange} placeholder=" --Select Size--" />
            <datalist id="sizes">
              <option value="28 mm"></option>
              <option value="36 mm"></option>
              <option value="42 mm"></option>
            </datalist>
          </div>
          <div className="color-section">
            <span className="size-text">Choose Color</span>
            <div className="color-div">
              <span className={`color-circle ppink ${selectedColor === 'ppink' ? 'selected' : ''}`} onClick={() => handleColorClick('ppink')}></span>
              <span className={`color-circle black ${selectedColor === 'black' ? 'selected' : ''}`} onClick={() => handleColorClick('black')}></span>
              <span className={`color-circle blue ${selectedColor === 'blue' ? 'selected' : ''}`} onClick={() => handleColorClick('blue')}></span>
              <span className={`color-circle brown ${selectedColor === 'brown' ? 'selected' : ''}`} onClick={() => handleColorClick('brown')}></span>
              <span className={`color-circle yellow ${selectedColor === 'yellow' ? 'selected' : ''}`} onClick={() => handleColorClick('yellow')}></span>
              <span className={`color-circle green ${selectedColor === 'green' ? 'selected' : ''}`} onClick={() => handleColorClick('green')}></span>
            </div>
          </div>
          <p className="detail-price">${item.price}</p>
          <button
            className={inBasket ? "detail-add detail-remove" : "detail-add"}
            onClick={() => {
              inBasket ? dispatch(removeBasketList(item.id)) : dispatch(addBasketList(item))
            }}
          >
            {inBasket ? "Remove from basket" : "Add to basket"}
          </button>
        </div>
      </div>
    </div>
  )
}
