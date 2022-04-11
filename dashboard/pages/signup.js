import React, { useCallback, useContext } from "react"
import { useRouter } from "next/router"
import EmailSignUp from "../components/EmailSignUp"
import { AuthContext } from "../context/AuthUserContext"


const Signup = () => {
  const { currentUser } = useContext(AuthContext)

  const Router = useRouter()

  if (currentUser) {
    Router.push("/")
    return <></>
  } else {
    return (
      <div className="">
        <h1 className="">Sign Up using</h1>
        <div className="">
          <EmailSignUp />
        </div>
      </div>
    )
  }
}

export default Signup