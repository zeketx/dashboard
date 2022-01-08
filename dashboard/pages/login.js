import Login from "../components/Login";
import Signup from "../components/Signup";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";


/**
 * TODO:
 * - login Logic to be added
 * - add modal 
 * - add Microsoft login
 * - add Google Login
 * - test comment again
 * **/ 

 const logOut = () => {
    signOut(auth);
    console.log({
        open: true,
        type: "success",
        message: `Logout Successfull ___ ${result.user.email}`,
    });

};

const LoginPage = () => {
    return ( 
        <div>
            <h3>Login</h3>
            <Login />
            <h3> Sign Up</h3>
            <Signup />
            <h3> Sign Out</h3>
            <button onClick={logOut}> Sign Out</button>
        </div>
     );
}
 
export default LoginPage;