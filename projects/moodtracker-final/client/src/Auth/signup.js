import React from "react";
import './auth.css'

function Signup() {
    return (
        <div className="auth-container">
            <form className="auth-form">
                <div className="user-type-container">
                    <div className="user-type">Theripist</div>
                    <div className="user-type">Student</div>
                </div>
                <input className="auth-input" value="" name="userName" type="text" placeholder="username" />
                <input className="auth-input" value="" name="password" type="text" placeholder="password" />
                {/* if isstudent true then render student-code */}
                {/* <input className="auth-input student-code" value="" name="student-code" type="text" placeholder="code" /> */}
                <label className="remember-switch">
                    <input className="no-input" type="checkbox" />
                    <span className="slider" />
                </label>
                <span className="remember-text">Remember password</span>
                <button className="auth-button" type="submit">Sign Up</button>
            </form>

        </div>
    )
}
export default (Signup);