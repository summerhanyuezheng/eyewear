import React from "react"
import "./Home.css"
import Nav from "../Components/Nav/Nav"
import Banner from "../Components/Banner/Banner"
import Display from "../Components//Display/Display"
import Footer from "../Components/Footer/Footer"
import DrawerCom from "../Components/Drawer/DrawerCom"

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div style={{ height: "100px" }}></div> {/* Spacer div */}
      <Banner></Banner>
      <Display></Display>
      <div style={{ height: "300px" }}></div>
      <Display headerText="Recommended Products" seeAllLink="/Recommended"></Display>
      <Footer></Footer>
      
    </>
  )
}
