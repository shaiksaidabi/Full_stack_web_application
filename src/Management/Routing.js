import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import Register from "../CrudOperations/Register";
import Login from '../CrudOperations/Login';
import BasicRead from '../Component/BasicRead';
import Dashboard from './Dashboard';
import UserPortal from '../CrudOperations/UserPortal';
const Routing = () => {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/courses' Component={Courses} />
            <Route path='/contact' Component={Contact} />
            <Route path='/register' Component={Register} />
            <Route path='/login' Component={Login} />
            <Route path='/datalist' Component={BasicRead} />
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/userportal' Component={UserPortal} />
           
        </Routes>
    )
}

export default Routing