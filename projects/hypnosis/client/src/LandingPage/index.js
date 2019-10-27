import React from "react"
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div className="homeContainer">
            <div>logo</div>
            <div>
                carrasol
            </div>
            <div>Call Me</div>
            <Link to="/book">Book Now</Link>
        </div>
    )
}
export default LandingPage;