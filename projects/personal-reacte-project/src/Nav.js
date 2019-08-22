import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <ul className="nav-bar">
            <Link to='/'>Home</Link>
            <Link to='/about'>How Dis Works</Link>
            <Link to ='/list'>Saved Rates</Link>
        </ul>
    )
}
export default Nav