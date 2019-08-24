import React from 'react'
import Nav from './Nav.js'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
    <div className="header-container">
            <Link to='/' className="header">Strong Xchange</Link>
        <Nav/>
    </div>
    )    
}
export default Header