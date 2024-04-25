import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"

import { useState } from "react"

export default function DrawerCom({ buttonContent }) {
  const [state, setState] = React.useState({
    right: false
  })

  const [arr, setArr] = useState([])

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 600 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <ul>
        {arr.map((v, i) => {
          return (
            <li key={i}>
              <p>Name:{v.name}</p>

              <p>Quantity:{v.quantity}</p>
            </li>
          )
        })}
      </ul>
    </Box>
  )

  return (
    <div>
      {["right"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{buttonContent}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
