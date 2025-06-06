import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [details, setDetails] = useState({});
    const navigate = useNavigate()
    const changeData = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })

    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const { username, password } = details;
      
        // Optional hardcoded check
        if (username === "uttam" && password === "uttam") {
          navigate("/dashboard");
        } else {
          try {
            const res = await axios.post("http://localhost:2307/api/login", {
              username,
              password,
            }, {
              withCredentials: true, // Send cookies (important for session)
            });
      
            if (res.status === 200) {
              navigate("/userportal");
            }
            else if(username==="uttam"&& password==="uttam"){
                navigate("/dashboard")

            }
          } catch (error) {
            alert("Invalid credentials or server error");
          }
        }
      };
      
    return (
        <section className='container p-5 text-center'>
            <div className='row'>

                <div className='col-lg-4 bg-light'>
                </div>

                <div className='col-lg-4 bg-light '>
                    <h1 className='text-center'>Login</h1>

                    <form onSubmit={submitHandler}>
                        <input type="text" name='username' className="form-control mb-3" id="floatingFirst" onChange={changeData} placeholder="User Name" />
                        <input type="password" name='password' className="form-control mb-3" id="floatingLast" onChange={changeData} placeholder="Password" />
                        <input type='submit' className='form-control btn btn-success' />
                    </form>
                </div>
                <div className='col-lg-4 bg-light'>
                </div>
            </div>

        </section >
    )
}

export default Login