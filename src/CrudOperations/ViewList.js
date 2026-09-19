import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewList = () => {
const [read, setRead]= useState([])
    useEffect(() => {
        axios.get(`http://localhost:2307/api/datalist`)
            .then((res) => setRead(res.data))
            .catch((err) => console.log("failure", err))
    }, []);

    return (
        <section>
            <div className='container p-5 text-center'>
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
                                            <button   data-bs-target="#update" data-bs-toggle="modal" className='btn btn-primary me-3'>Edit</button>
                                            <button  className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </section>)
}

export default ViewList