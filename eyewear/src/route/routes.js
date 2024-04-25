import Featured from "../AllPages/Featured"
import Home from "../AllPages/Home"
import Shop from "../AllPages/Shop"
import { Navigate } from "react-router-dom"
import SignUp from "../AllPages/SignUp"
import NotFound from "../AllPages/NotFound"
import Recommended from "../AllPages/Recommended"
import LogIn from "../AllPages/LogIn"
import Search from "../AllPages/Search"
import Details from "../AllPages/Details"

const routes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/featured",
    element: <Featured />
  },
  {
    path: "/recommended",
    element: <Recommended />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <LogIn />
  },
  {
    path: "/*",
    element: <NotFound />
  },
  {
    path: "/search/:searchTerm",
    element: <Search></Search>
  },
  {
    path: "/detail/:id",
    element: <Details></Details>
  }
]

export default routes
