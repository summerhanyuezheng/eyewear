import React from "react"
import "./NotFound.css"

export default function NotFoundCom() {
  return (
    <>
      <div className="wrapper">
        <div className="pink">
          <div className="error-code">404</div>
          <div className="page-not-found">Page NotFound</div>
          <img src="/notfound.png" alt="" />
        </div>
      </div>
    </>
  )
}
