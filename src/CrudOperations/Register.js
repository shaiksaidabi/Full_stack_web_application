import React, { useState,  } from 'react';

import { useNavigate } from 'react-router-dom';
import RI1 from "../Management/assets/RegisterImage-1.jpg";
import RI2 from "../Management/assets/Sign up-rafiki.png";
import axios from 'axios';
const Register = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [mobilenumber, setMobilenumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const registered = (e) => {
        e.preventDefault(); //not refreshing the form

        axios.post('http://localhost:2307/api/register', { firstname, lastname, username,  mobilenumber , email, password  })
            .then((res) => {
                alert("your registered")
                navigate("/login")
            })
            .catch((err) => {
                 
                console.log("failure")
                alert("Registration failed! Please try again.");
            })
             

    }
    return (
        <section className='container-fluid p-5 text-center'>

            <div className='row'>

                <div className='col-lg-4'>
                    <img src={RI2} className='image' alt='rt2 image'/>
                </div>

                <div className='col-lg-4 bg-light'>

                    <h1 className='text-center'>Register Form</h1>

                    <form onSubmit={registered}>

                        <div className="form-floating mb-3  ">
                            <input type="text" className="form-control" name="firstname" id="floatingFirst" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} required/>
                            <label for="floatingFirst">First Name</label>
                        </div>
                        <div className="form-floating mb-3  ">
                            <input type="text" className="form-control" name='lastname' id="floatingLast" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} required />
                            <label for="floatingLast">Last Name</label>
                        </div>
                        <div className="form-floating mb-3  ">
                            <input type="text" className="form-control" name="username" id="floatingUser" placeholder="User Name" onChange={(e) => setUsername(e.target.value)} required/>
                            <label for="floatingUser">User Name</label>
                        </div>

                        <div className="form-floating mb-3  ">
                            <input type="tel" className="form-control" name='mobilenumber' id="floatingMobile" placeholder="Mobile Number" onChange={(e) => setMobilenumber(e.target.value)} required/>
                            <label for="floatingMobile">Mobile Number</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" name="email" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required/>
                            <label for="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                            <label for="floatingPassword">Password</label>
                        </div>


                        <button type='submit' className='btn btn-primary me-3 '>
                            Register
                        </button>
                        
                      

                    </form>




                </div>

                <div className='col-lg-4 '>
                    <img src={RI1} className='image'  alt='rt1 image' />
                </div>

            </div>


        </section>
    )
}

export default Register