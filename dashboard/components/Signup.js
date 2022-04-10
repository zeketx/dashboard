import React, { useCallback } from "react"
import { useRouter } from "next/router"
import { auth } from "../lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import Link from "next/link"

const SignUp = () => {

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
      >
        <div className="mb-4">
          <label
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="">
          <button
            type="submit"
          >
            Sign In
          </button>
          <Link href="/signup">
            <a className="">
              Sign up?
            </a>
          </Link>
        </div>
      </form>
    </div>
  )

}

export default SignUp;