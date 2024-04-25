import React from "react"
import Nav from "../Components/Nav/Nav"

import Footer from "../Components/Footer/Footer"
import DetailCom from "../Components/Details/DetailCom"
import Display from "../Components/Display/Display"

export default function Shop() {
  return (
    <div>
      <Nav></Nav>
      <div style={{ height: "200px" }}></div> {/* Spacer div */}
      <DetailCom></DetailCom>
      <div style={{ height: "100px" }}></div>
      <Display headerText="Recommended" seeAllText=" "></Display>
      <Footer></Footer>
    </div>
  )
}
