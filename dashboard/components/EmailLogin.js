import React, { useCallback } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import 'bulma/css/bulma.min.css'

const EmailLogin = () => {
  const Router = useRouter()

  const loginHandler = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        Router.push("/")
      } catch (error) {
        console.log("error")
        alert(error)
      }
    },
    [Router]
  )
  
  return (
    <div className="">

      <form
        onSubmit={loginHandler}
        className=""
      >
        <div className="mb-4">
          <label
            className=""
            htmlFor="email"
          >
            Email
          </label>
          <input
            class="input is-warning"
            name="email"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            className=""
            htmlFor="password"
          >
            Password
          </label>
          <input
            class="input is-warning"
            name="password"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="">
          <button
            className="button is-success is-outlined"
            type="submit"
          >
            Sign In
          </button>
          <Link href="/signup" >
            <a className="button is-dark ml-1">
              Sign Up
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default EmailLogin