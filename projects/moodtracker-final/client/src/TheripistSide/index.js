import React from "react"
import { Link } from 'react-router-dom'
import ClientDashProfile from './CurrentClients/ClientDashProfile'
import './theripistdash.css'

function TheripistDash() {
    return (
        <div className="dashContainer">
            <div>Welcome,<span> Theripist Name</span></div>
            <ClientDashProfile />
            <ClientDashProfile />
            <ClientDashProfile />
            <ClientDashProfile />
            <div className="add-Client-link">
                <Link className="add-div" to="/addclient">+</Link>
                <Link className="link-add"to="/addclient">Add Client</Link>
            </div>
            
        </div>
    )
        
}export default TheripistDash