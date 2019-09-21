import React from "react"
import { Link } from 'react-router-dom'
import './moodnav.css'

function Nav() {
    return (
        <div className="nav-bar-wrapper">
            <div className="nav-title"><Link to="/dashboard">FUSH</Link></div>
            <div className="nav-link-container">
                <div className="nav-link">
                    <Link to="/login">Login</Link>
                </div>
                <div className="nav-link">
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
export default Nav;