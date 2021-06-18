import React, { Component, useState } from "react";

import axios from "axios";

 function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");



    // var url = `/user/sign-in?email=${email}&age=${password}`

    const handleSubmit = (event) => {
      event.preventDefault();
  
    //   if (email !== "" && password !== "") {
         axios
          .post('/user/sign-in', {
            email: email,
            password: password
          })
          .then((response) => {
              alert("User logged in! ")
            
            console.log("response=>", response);
          })
         
          .catch((error) => {
            console.log("error=>", error.response);
          });
          setEmail("")
          setPassword("")
    //   }
    //   else{
    //       alert("Plz fill the data")
    //   }
      
    };
        return (
            <form action=" " onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                        }}
                        />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                  
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
export default Login