import React, { useState } from 'react'
import Welcome from './Welcome'
import Register from '../CrudOperations/Register'
import BasicRead from '../Component/BasicRead'

const Dashboard = () => {
    const [view, setView] = useState("")

    const DashboardView = () => {
        if (view === "") {
            return <Welcome />
        }
        else if (view === "adduser") {
            return <Register />
        }
        else if (view === "viewlist") {
            return <BasicRead />
        }
        else {
            return <h1>invalid page</h1>
        }
    }
    return (
        <div className='container-fluid p-5 text-center'>
            <div className='row'>
                <aside className='col-md-3'>
                    <h3 onClick={() => setView("")}>Admin Dashboard</h3>
                    <button onClick={() => setView("adduser")}>Add User</button>
                    <button onClick={() => setView("viewlist")}>View List</button>
                </aside>
                <div className='col-md-9'>
                     
                        {DashboardView()}
                     
                </div>
            </div>

        </div>
    )
}

export default Dashboard