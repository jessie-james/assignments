import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <ul className="nav-bar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to ='/list'>List</Link>
        </ul>
    )
}
export default Nav