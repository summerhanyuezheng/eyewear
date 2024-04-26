import React from "react"
import app from "../../config"
import "./SignUpCom.css"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"

export default function SignUpCom({ options = "Sign Up", switchOpt = "Already have an account?", buttonText = "Log In" }) {
  const navigate = useNavigate()
  const [data, setData] = useState({ email: "", password: "" })
  const changeFn = e => {
    console.log("e", e)
    console.log("data", data)
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app)
  //注册账户
  const signUp = e => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        console.log("user", user)
        alert("Please Log In now")
        navigate("/login")
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message.slice(9)
        console.log(errorMessage)
        alert("Failed to sign up: " + errorMessage)
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
            <Link to={"/login"}>{buttonText}</Link>
          </div>
        </div>
      </form>
    </>
  )
}
