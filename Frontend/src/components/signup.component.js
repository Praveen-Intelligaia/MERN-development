import React, {useState, Component } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

        function SignUp () {
            const history =useHistory()
            const [userRegistration, setUserRegistration] = useState({
                firstname:"",
                lastname:"",
                email:"",
                password:""
            });
            const handleInput = (e) =>{
                const name =e.target.name;
                const value =e.target.value;
                console.log(name,value);

                setUserRegistration({...userRegistration,[name]:value});
            }
            const handleSubmit =async(e) =>{
                e.preventDefault()
                console.log(userRegistration)
                await axios.post('http://localhost:5000/user/sign-up',{
                    firstname: userRegistration.firstname,
                    lastname: userRegistration.lastname,
                    email:userRegistration.email,
                    password:userRegistration.password
                }).then((response)=>{
                   
                     alert("Thank you for registering "+userRegistration.firstname);  
                     history.push("/sign-in")    
                },(error)=>{
                    alert(error)
                })
               

               
             
                
                
            }    
               


        return (
            <form action =""onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="First name"
                    required="required"
                    value={userRegistration.firstname}
                    onChange={handleInput}
                    name="firstname"
                    id="firstname"
 
                    />
                   
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Last name"
                    required="required"
                    value={userRegistration.lastname} 
                    name="lastname"
                    onChange={handleInput}
                    id="lastname"


                     />
                     
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                     className="form-control"
                      placeholder="Enter email"
                      required="required"
                      value={userRegistration.email}
                      onChange={handleInput}
                      name="email"
                      id="email"

                      />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                     className="form-control" 
                     placeholder="Enter password" 
                     required="required"
                     value={userRegistration.password}
                     onChange={handleInput}
                     name="password"
                     id="password"

                     />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>

            </form>
            
         
        );
    }
        export default SignUp