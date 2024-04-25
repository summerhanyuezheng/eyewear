import React from "react"
import Nav from "../Components/Nav/Nav"

import Footer from "../Components/Footer/Footer"
import SearchCom from "../Components/SearchBar/SearchCom"

export default function Shop() {
  return (
    <div>
      <Nav></Nav>
      <div style={{ height: "100px" }}></div> {/* Spacer div */}
      <SearchCom></SearchCom>
      <div style={{ height: "200px" }}></div>
      <Footer></Footer>
    </div>
  )
}
