import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    
    return (
        <div>
            <h1>LOGO</h1>
            <ul>
                <Link className="english navTag" to="/english">English</Link>
                <Link ClassName="espanol navTag" to="/espanol">Espanol</Link>
                <div id="google_translate_element">Translate Button</div>
            </ul>
            
        </div>

        
    )
}
export default Nav;