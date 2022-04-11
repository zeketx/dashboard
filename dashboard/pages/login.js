import React, { useContext } from "react"
import { AuthContext } from "../context/AuthUserContext"
import { useRouter } from "next/router"
import EmailLogin from "../components/EmailLogin"

const Login = () => {
  const { currentUser } = useContext(AuthContext)
  const Router = useRouter()

  if (currentUser) {
    Router.push("/")
    return <></>
  } else {
    return (
      <div className="">
        <h1 className="">Login Using </h1>
        <div className="">
          <EmailLogin />
        </div>
      </div>
    )
  }
}

export default Login