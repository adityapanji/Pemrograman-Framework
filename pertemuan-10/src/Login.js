import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import firebase from "firebase";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true);
            })
            .catch(e=>{
                setErrors(e.message);
            });
    };

const handleLogin = () => {
    const base_provider = new firebase.auth.GoogleAuthProvider();
    firebase
    .auth()
    .signInWithPopup(base_provider)
    .then(res => {
        Auth.setLoggedIn(true);
        alert("Succes Login")
    })
    .catch(e => {
        setErrors(e.message);
    })
}


    return(
        <div>
            <h1>Login</h1>
            <form onSubmit = {e=> handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password"
                />
                <hr/>
                <button class="googleBtn" type="button" onClick= { handleLogin }>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="logo"
                    /> Login With Google
                </button>
                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    );
};

export default Login;