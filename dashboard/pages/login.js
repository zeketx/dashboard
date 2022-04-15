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
      <div className="container is-max-desktop  pt-6">
        <h1 className="is-size-1">Login Using </h1>
        <div className="">
          <EmailLogin />
        </div>
      </div>
    )
  }
}

export default Login