import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BasicRead = () => {
    const [read, setRead] = useState([])
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [mobilenumber, setMobilenumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [id, setId] = useState("")


    useEffect(() => {
        axios.get(`http://localhost:2307/api/datalist`)
            .then((res) => setRead(res.data))
            .catch((err) => console.log("failure", err))
    }, []);

    // const deleteUser = (eid) => {
    //     axios.delete(`http://localhost:2307/api/datalist/${eid}`)
    //     .then(()=>alert("Your user is deleted"))
    //     .catch((err)=>console.log(err))
    // };

    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            axios.delete(`http://localhost:2307/api/delete/${id}`)
                .then(() => {
                    setRead(prev => prev.filter(user => user.id !== id));
                })
                .catch(err => console.log(err));
        }
    };

    const editUser = (id) => {
        axios.get(`http://localhost:2307/api/details/${id}`)
            .then((res) => {
                setFirstname(res.data.firstname)
                setLastname(res.data.lastname)
                setUsername(res.data.username)
                setMobilenumber(res.data.mobilenumber)
                setEmail(res.data.email)
                setPassword(res.data.password)
                setId(res.data.id)
            })
            .catch((err) => console.log(err))
    }
    const updateUser = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:2307/api/edit/${id}`, { id, firstname, lastname, username, mobilenumber, email, password })
            .then((res) => {
                alert(" User Updated Successfully")

                return axios.get(`http://localhost:2307/api/datalist`)
                    .then((res) => setRead(res.data))
                    .catch((err) => console.log("failure", err));
            })
            .catch((err) => console.log(err))
    }


    return (
        <section>
            <div className='container-fluid p-5 text-center'>
                <h1 className='display-6'><b>List Of Data</b></h1>
                <table className='table table-bordered text-center'>
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>

                            <th>
                                Firstname
                            </th>
                            <th>
                                Lastname
                            </th>
                            <th>
                                Username
                            </th>
                            <th>
                                MobileNumber
                            </th>
                            <th>
                                Email Id
                            </th>
                            <th>
                                Password
                            </th>

                            <th>
                                Actions
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            read.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.username}</td>
                                        <td>{user.mobilenumber}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>

                                        <td>
                                            <button onClick={() => editUser(user.id)} data-bs-target="#update" data-bs-toggle="modal" className='btn btn-primary me-3'>Edit</button>
                                            <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>


            <div className="modal" id="update">
                <div className="modal-dialog modal-md ">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h5>Update The Details</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateUser}>

                                <div className="form-floating mb-3  ">
                                    <input type="text" className="form-control" value={firstname} id="floatingFirst" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
                                    <label htmlFor="floatingFirst">First Name</label>
                                </div>
                                <div className="form-floating mb-3  ">
                                    <input type="text" className="form-control" value={lastname} id="floatingLast" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
                                    <label htmlFor="floatingLast">Last Name</label>
                                </div>
                                <div className="form-floating mb-3  ">
                                    <input type="text" className="form-control" value={username} id="floatingUser" placeholder="User Name" onChange={(e) => setUsername(e.target.value)} />
                                    <label htmlFor="floatingUser">User Name</label>
                                </div>

                                <div className="form-floating mb-3  ">
                                    <input type="tel" className="form-control" value={mobilenumber} id="floatingMobile" placeholder="Mobile Number" onChange={(e) => setMobilenumber(e.target.value)} />
                                    <label htmlFor="floatingMobile">Mobile Number</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" value={email} id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" value={password} id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>


                                <button type="submit" className='btn btn-primary' >Update</button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </section>




    )
}

export default BasicRead