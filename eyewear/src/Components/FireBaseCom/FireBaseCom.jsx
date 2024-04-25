import React from "react"
import app from "../../config"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export default function FireBaseCom() {
  const [data, setData] = useState({ username: "", password: "" })
  const changeFn = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app)
  //注册账户
  const signUp = e => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, data.username, data.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        console.log("user", user)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }

  //登陆
  const logIn = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, data.username, data.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        console.log("登陆user", user)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }
  return (
    <div>
      <h1>FireBase组件</h1>
      <form action="">
        <input type="email" onChange={changeFn} name="username" placeholder="用户名" />
        <input type="password" onChange={changeFn} name="password" placeholder="密码" />
        <button onClick={signUp} type="submit">
          注册
        </button>
        <button onClick={logIn} type="submit">
          登陆
        </button>
      </form>
    </div>
  )
}
