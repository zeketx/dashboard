import React, { useContext } from "react"
import { auth } from "../lib/firebase"
import { signOut } from "firebase/auth"
import AuthRoute from "../authHoC/authRoute"
import { AuthContext } from "../context/AuthUserContext"

function Index() {
  const { userData } = useContext(AuthContext)

  const signOutHandler = async () => {
    await signOut(auth)
  }

  return (
    <AuthRoute>
      <div>
        <h1 className="">Home</h1>
        <button
          className=""
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
            <h4>userId:</h4>
            <h6>{userData.userId}</h6>
          </div>
          <div className="">
            <h4>display name:</h4>
            <h6>{userData.userName ? userData.userName : "null"}</h6>
          </div>
          <div className="">
            <h4>email:</h4>
            <h6>{userData.userEmail}</h6>
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