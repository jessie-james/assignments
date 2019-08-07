import React from 'react'

const Nav = ()=>{
    return (
        <div className="nav-container">
            <div className="logo"></div>
            <div className="nav-bar">
                <ul className="nav-lists">
                    <li>Who Are We?
                    <ul className="who-list drop-menu">
                        <li>Our Philosopy</li>
                        <li>MileStones</li>
                        <li>How we are Unique</li>
                        </ul>
                    </li>
                    <li>Choosing Live Strong
                    <ul className='chooseing-live-list drop-menu'>
                        <li>The Right Fit</li>
                        <li>Daily Life</li>
                        <li>Activites</li>
                        <li>Academics</li>
                        </ul>
                    </li>
                    <li>Therapy
                     <ul className="therapy-list drop-menu">
                        <li>Traditional</li>
                        <li>NeuroTherapy</li>
                        <li>Family Therapy</li>
                        </ul>
                    </li>
                    <li>Team
                    <ul className="team-list drop-menu">
                        <li>Staff</li>
                        <li>Testimonials</li>
                        <li>Partners</li>
                        </ul>
                    </li>
                    <li>Admissions</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Nav