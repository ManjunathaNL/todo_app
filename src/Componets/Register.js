import React, { useState, useEffect } from 'react'
import validator from 'validator';
import './Register.css'

function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [formErrors, setFormErrors] = useState({})
    const errors = {}


    useEffect(() =>
    {

        const result = JSON.parse(localStorage.getItem("name" || ''))
        setName(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('name', JSON.stringify(name))
    },[name])


    useEffect(() =>
    {
        const result = JSON.parse(localStorage.getItem("email" || ''))
        setEmail(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('email', JSON.stringify(email))
    },[email])

    useEffect(() =>
    {
        const result = JSON.parse(localStorage.getItem("password" || ''))
        setPassword(result)
    },[])

    useEffect(() =>
    {
        localStorage.setItem('password', JSON.stringify(password))
    },[password])

    useEffect(() =>
    {
        const result = JSON.parse(localStorage.getItem("cpassword" || ''))
        setCPassword(result)
    },[])

    useEffect(() =>
    {
        localStorage.setItem('cpassword', JSON.stringify(cpassword))
    },[cpassword])

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }


    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault()
        

          runValidations()

        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                name: name,
                email: email,
                password: password,
                cpassword: cpassword,

            }

            console.log('form data', formData)
            alert("SignUp Successfully")
            
            setName("");
            setEmail("");
            setPassword("");
            setCPassword("");
            // name ="";
            // email ="";
            // password ="";
            // cpassword  ="";
            // formData="";

            
        }
        else {
            console.log('form errors', errors)
            setFormErrors(errors)

        }


        // if(name =={name} && email =={email} && password =={password} && cpassword =={cpassword})
        //    {
        //   alert(" error in form");
        //    }
        //    else{
        //        alert("SignUp Successfully")
        //    }

        // alert("SignUp Successfully");
        // props.history.push('/Login')
    }

    const runValidations = () => {
        //name
        if (name.trim().length === 0) {
            errors.name = 'name cannot be blank '
        }
        else if(name.trim().length < 5) {
            errors.name = 'name should have more than 5 characters'
        }

        //email
        if (email.trim().length === 0) 
        {
            errors.email = 'email cannot be blank'
        } 
        else if (!validator.isEmail(email)) 
        {
            errors.email = 'invalid email format'
        }
        //password
        // if (password.trim().length === 0) 
        // {
        //     errors.password = 'Password connot be blank'
        // }
         //password
         if(!(password.length > 8 && password.length < 128)) {
            errors.password = 'password should be between 8 and 128 characters'
        }
        //Confirmpassword
        if(cpassword.trim().length === 0)
        {
             errors.cpassword='Confirm password should be between 8 and 128 characters'
        }
        
        //  if(password !== cpassword)
        // {
        //     errors.cpassword = 'Password donot match'
        // }
    }

    //    function formSubmit(formData){
    //        if(name=={name} && email=={email} && password=={password} && cpassword=={cpassword})
    //        {
    //       alert("SignUp Successfully");
    //        }
    //        else{
    //            alert("error in form")
    //        }
    //    }

    // Directly to the login page
    function handleClick() {
        // alert("SignUp Successfully");
        return props.history.push('/Login')
    }


    return (

        <div class="container">
            <div classname="login-sec">
                <form onSubmit={handleFormSubmit} >
                    <div className='user-data'>
                        <h3 class="reg">SignUp</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Full Name"
                                name="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required="" /> {formErrors.name && <p  className="p"> {formErrors.name}</p>}
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required="" />{formErrors.email && <p className="p"> {formErrors.email} </p>}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required="" /> {formErrors.password && <p  className="p"> {formErrors.password}</p>}
                        </div>


                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={cpassword}
                                onChange={(event) => setCPassword(event.target.value)}
                                required="" /> {formErrors.cpassword && <p  className="p"> {formErrors.cpassword}</p>}
                        </div>
                        <button type="submit"
                            className="btn btn-dark btn-lg btn-block" >Register</button>
                        <div className="forgot-password text-right ">
                            Already registered <a href="#" onClick={handleClick}> login? </a>
                        </div>
                    </div>
                    {/* <Login /> */}
                </form>

            </div>

        </div>


    )

}

export default Register

