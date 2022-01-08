import Login from "../components/Login";
import Signup from "../components/Signup";


/**
 * TODO:
 * - login Logic to be added
 * - add modal 
 * - add Microsoft login
 * - add Google Login
 * **/ 
const LoginPage = () => {
    return ( 
        <div>
            <h3>Login</h3>
            <Login />
            <h3> Sign Up</h3>
            <Signup />
        </div>
     );
}
 
export default LoginPage;