import React from "react"
import "./LogInCom.css"
import app from "../../config"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

export default function LogInCom({ options = "Log In", switchOpt = "Don't have an account?", buttonText = "Sign Up" }) {
  const navigate = useNavigate()
  const [data, setData] = useState({ email: "", password: "" })
  const changeFn = e => {
    console.log("e", e)
    console.log("data", data)
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app)
  //现有用户登陆
  const signUp = e => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        console.log("user", user)
        alert("successfully logged in!")
        navigate("/home")
        // ...
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message.slice(9)
        console.log(errorMessage)
        alert("Failed to log in: " + errorMessage)
      })
  }

  return (
    <>
      <div className="whole-sign-up"></div>
      <form className="sign-up-center" action="">
        <div className="signup-content">
          <p>* Email</p>
          <input className="signup-email" type="email" onChange={changeFn} name="email" placeholder="   test@example.com" />
          <p>* Password</p>
          <input className="signup-password" type="password" onChange={changeFn} name="password" placeholder="   Your Password" />
          <button className="signup-button" onClick={signUp} type="submit">
            {options} <span>→</span>
          </button>
          <div className="no-account">
            {switchOpt}
            <Link to={"/signup"}>{buttonText}</Link>
          </div>
        </div>
      </form>
    </>
  )
}
