import { useRoutes } from "react-router-dom"
import "./App.css"
import routes from "./route/routes"

// import Home from "./AllPages/Home"
// import Shop from "./AllPages/Shop"
// import NotFound from "./Components/NotFound/NotFound"
// import { Route, Routes } from "react-router-dom"

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      {element}
      {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes> */}
    </div>
  )
}

export default App
