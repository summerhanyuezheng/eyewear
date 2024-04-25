import React from "react"
import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"
import FeatureBanner from "../Components/FeatureBanner/FeatureBanner"
import Display from "../Components/Display/Display"

export default function Featured() {
  return (
    <div>
      <Nav></Nav>
      <div style={{ height: "100px" }}></div> {/* Spacer div */}
      <FeatureBanner></FeatureBanner>
      <Display headerText=" " seeAllText=" "></Display>
      <Footer></Footer>
    </div>
  )
}
