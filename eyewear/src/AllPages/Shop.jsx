import React from "react"
import Nav from "../Components/Nav/Nav"

import ShopDisplay from "../Components/Shop/ShopDisplay"
import Footer from "../Components/Footer/Footer"
import FireBaseCom from "../Components/FireBaseCom/FireBaseCom"

export default function Shop() {
  return (
    <div>
      <Nav></Nav>
      <div style={{ height: "100px" }}></div> {/* Spacer div */}
      <ShopDisplay></ShopDisplay>
      <div style={{ height: "200px" }}></div>
      <Footer></Footer>
    </div>
  )
}
