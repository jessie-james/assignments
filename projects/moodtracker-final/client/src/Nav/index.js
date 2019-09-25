import React from "react"
import { Link } from 'react-router-dom'
import './moodnav.css'
import { withContext } from "../AppContext"

function Nav(props) {
    return (
        <div className="nav-bar-wrapper">
            <div className="nav-title"><Link to="/theripistdashboard">FUSH</Link></div>
                {
                    props.token 
                    ? <div className="nav-link-container">
                        <div className="nav-link" onClick={() => props.logout()}><Link to="/login">Logout</Link></div>
                    </div>
                            
                    : <div className="nav-link-container">
                        <div className="nav-link"><Link to="/login">Login</Link></div>
                        <div className="nav-link"><Link to="/signup">Sign Up</Link></div>
                    </div>
                }
        </div>
    )
}
export default withContext(Nav);