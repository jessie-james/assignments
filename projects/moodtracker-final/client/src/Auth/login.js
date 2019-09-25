import React, { Component } from "react";
import './auth.css'
import { withContext } from "../AppContext"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isTheripist: false,
            code: "",
            errorMessage: "",
        }
    }
    handleUserType = () => {

    }

  
    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            isTheripist: false,
            code: "",
            errorMessage: ""
        })
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

   

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/dashboard"))
            .catch(err => {
                this.setState({ errorMessage: err.response.data.message })
            })
    }
    render() {
        return (
            <div className="auth-container">
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <div className="user-type-container">
                        <div className="user-type" onClick={this.handleUserType}>Theripist</div>
                        <div className="user-type" onClick={this.handleUserType}>Student</div>
                    </div>
                    <input className="auth-input" onChange={this.handleChange} value={this.state.username} name="username" type="text" placeholder="username" />
                    <input className="auth-input" onChange={this.handleChange} value={this.state.password} name="password" type="text" placeholder="password" />
                    {/* if isstudent true then render student-code */}
                    {/* <input className="auth-input student-code" value="" name="student-code" type="text" placeholder="code" /> */}
                    <label className="remember-switch">
                        <input className="no-input" type="checkbox" />
                        <span className="slider" />
                    </label>
                    <span className="remember-text">Remember password</span>
                    <button className="auth-button" type="submit" onSubmit={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}
export default withContext(Login);



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

