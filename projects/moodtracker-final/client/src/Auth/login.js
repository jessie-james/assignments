import React from "react";
import './auth.css'

function Login() {
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
                <input className="auth-input student-code" value="" name="student-code" type="text" placeholder="code" />
                <label className="remember-switch">
                    <input className="no-input" type="checkbox" />
                    <span className="slider" />
                </label>
                <span className="remember-text">Remember password</span>
                <button className="auth-button" type="submit">Login</button>
            </form>
        </div>
    )
}
export default (Login);


/* handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    } */

/* clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    } */

/* handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/todos"))
            .catch(err => {
                this.setState({errorMessage: err.response.data.message})
            })
    } */

