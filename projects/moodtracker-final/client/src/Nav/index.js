import React from "react"

function Nav() {
    return (
        <div className="nav-bar-wrapper">
            <div className="nav-title">FUSH</div>
            <div className="nav-link-container">
                <div className="nav-link">
                    <Link to="/login">login</Link>
                </div>
                <div className="nav-link">
                    <Link to="/login">logout</Link>
                </div>
            </div>
        </div>
    )
}
export default Nav;