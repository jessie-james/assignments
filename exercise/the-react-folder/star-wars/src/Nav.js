import React from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/character_list">Character List</Link>
        </div>
    )
}
export default Nav