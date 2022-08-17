import React, { useState, useEffect } from "react";
import Register from "./Register";
import validator from 'validator';
import './Style/Login.css';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [formErrors, setFormErrors] = useState({})
    // const errors = {}
    const errors = {}

    // useEffect(() => {
    //     // console.log(localStorage.setItem("email","password"))

    //     const result = JSON.parse(localStorage.getItem("email"))
    //     setEmail(result)
    // }, [])

    // useEffect(()=>{
    //     localStorage.setItem('email', JSON.stringify(email))
    // },[email])

    // useEffect(() => {
    //     // localStorage.setItem("email","password" || [])

    //     const password = JSON.parse(localStorage.getItem("password"))
    //     setPassword(password)
    // }, [])

    // useEffect(()=>{
    //     localStorage.setItem('password', JSON.stringify(password))
    // },[password])

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }

    function runValidations() {
        //email
        if (email.trim().length === 0) {
            errors.email = 'email cannot be blank'
        } else if (!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }
        //password
        if (password.trim().length === 0) {
            errors.password = 'Password connot be blank'
        }

    }


    function handleSubmit(event) {
        event.preventDefault();
        runValidations()

        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                email: email,
                password: password
            }
            console.log('form data', formData)
            alert("Signin Successfully")

            // const result = JSON.parse(localStorage.getItem("email"))
            // const password = JSON.parse(localStorage.getItem("password"))

            // if (!email || !password) {
            //     setFlag(true);
            //     alert("EMPTY");
            // } else if ((password !== password) || (email !== result)) {
            //     setFlag(true);
            // }
            setEmail("");
            setPassword("");
            props.history.push('/Todo')
        }

        else {
            console.log('form errors', errors)
            setFormErrors(errors)

        }
    }

    function handleClick() {
        return props.history.push('/Register')
    }

    return (
        <div class="container">
            <div class=" main-section">
                <div class="  col-md-7 welcome-section">
                    <h1 class="welcome-label">Welcome Page</h1>
                </div>
                <div class="  col-md-5 login-section">
                    <div>
                        <label>Hello !</label>
                    </div>
                    <div class="colored-font">
                        <label>Good Morning</label>
                    </div>
                    <div class="text-center">
                        <label class="colored-font">LogIn </label>   <label>Your Account</label>
                    </div>
                    <form onSubmit={handleSubmit} className="form-list col-md-12 p-3px">
                        <input type="text-text"
                            placeholder="Email Address"
                            className="input-text"
                            name="email"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /> {formErrors.email && <p className="p"> {formErrors.email} </p>}
                        <input type="password"
                            className="input-text"
                            placeholder="Password"
                            name="psw"
                            required=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />{formErrors.password && <p className="p"> {formErrors.password} </p>}
                        <div class="row py-5">
                            <label class="col-md-6">
                                <input
                                    type="checkbox"
                                    name="remember" /> Remember me
                            </label>
                            <span class="col-md-6 psw"> Forgot <a href="#">password?</a></span>
                        </div>
                        <div>
                            {/* <button class="btn-text" disabled={!validateForm()}>SUBMIT</button> */}
                            <button class="btn-text" >SUBMIT</button>
                        </div>
                    </form>
                    <div class="text-center col-md-12">
                        Don't have an account? <a href="#" onClick={handleClick}> Signup</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;
