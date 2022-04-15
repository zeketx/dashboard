import React, { useContext } from "react"
import { auth } from "../lib/firebase"
import { signOut } from "firebase/auth"
import AuthRoute from "../authHoC/authRoute"
import { AuthContext } from "../context/AuthUserContext"
import 'bulma/css/bulma.min.css'


function Index() {
  const { userData } = useContext(AuthContext)

  const signOutHandler = async () => {
    await signOut(auth)
  }

  return (
    <AuthRoute>
      <div class="container is-max-desktop  pt-6">
        <h1 className="">Home</h1>
        <button
          className="button is-success is-outlined"
          onClick={signOutHandler}
        >
          Sign out
        </button>
        <div className="">
          <div className="">
            <h4>Authentication method:</h4>
            <h6>{userData.userProviderId}</h6>
          </div>
          <div className="">
            <h4>userId: {userData.userId}</h4>
          </div>
          <div className="">
            <h4>display name: {userData.userName ? userData.userName : "null"}</h4>
          </div>
          <div className="">
            <h4>email: {userData.userEmail}</h4>
          </div>
          <div className="">
            <h4>Profile picture</h4>
            {userData.userPhotoLink ? (
              <img
                src={userData.userPhotoLink}
                alt={userData.userName}
              />
            ) : (
              "null"
            )}
          </div>
        </div>
      </div>
    </AuthRoute>
  )
}

export default Index