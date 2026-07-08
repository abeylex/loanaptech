import React from "react"
import "./Login.css";
function Login() {
    return(
<div className="login">
     <h2>Welcome Back</h2>
    <form>
     <input type="email"  placeholder="Email address" required/>
    <input type="password"  placeholder="Password" required/>
<button>Login</button>
<a href="#">Don't have an account?</a> <a href="#">Login</a>

    </form>
</div>
    );
}
export default Login;
 