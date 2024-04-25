import React from "react"
import "./Banner.css"
import { Link } from "react-router-dom"

export default function Banner() {
  return (
    <div className="wholeBanner">
      <div className="banner-container">
        <div className="Banner-text">
          <h2>
            <b>See </b>everything with <b>Clarity</b>
          </h2>
          <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
          <Link to="/shop">
            <button>Shop Now →</button>
          </Link>
        </div>
        <div className="Banner-img">
          <img src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png" alt="" />
        </div>
      </div>
    </div>
  )
}
