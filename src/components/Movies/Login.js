import React from "react";

function Login() {
    return(
        <form>
            <label for="em"><b>Email</b></label>
            <input type="text" placeholder="Insert your email" required></input>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Insert your password" required></input>
            <input type="submit"></input>
        </form>
    )
}

export default Login;