import React from 'react'
import { Link } from 'react-router-dom'
import {withGlobal} from './GlobalProvider'

const Nav = (props) => {
    console.log(props.badgeNum)
    return (
        <ul className="nav-bar badge" >
            <Link to='/'className="linking">Home</Link>
            <Link to='/about' className="linking">How To Use</Link>
            <Link to='/list' className="linking">Saved rates<div className={props.isSaved ? 'badge' : "saved-it-false"} data-badge={props.badgeNum}></div></Link>
        </ul>
    )
}
export default withGlobal(Nav)