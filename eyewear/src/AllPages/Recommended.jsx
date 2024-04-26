import React from "react"

import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"
import FeatureBanner from "../Components/FeatureBanner/FeatureBanner"
import Display from "../Components/Display/Display"

export default function Recommended() {
  return (
    <div>
      <Nav></Nav>
      <div style={{ height: "100px" }}></div> {/* Spacer div */}
      <FeatureBanner subtitle="Recommended Producs" bannerImg="https://salinaka-ecommerce.web.app/images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png"></FeatureBanner>
      <Display headerText="" seeAllText = "See All"></Display>
      <Footer></Footer>
    </div>
  )
}
