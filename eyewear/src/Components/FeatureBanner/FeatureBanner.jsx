import React from "react"
import "./FeatureBanner.css"

export default function FeatureBanner({ subtitle = "Featured Products", bannerImg = "https://salinaka-ecommerce.web.app/images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png" }) {
  return (
    <div className="featured-wholeBanner">
      <div className="featured-banner-container">
        <div className="featured-Banner-text">
          <h2>{subtitle}</h2>
        </div>
        <div className="feature-Banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  )
}
