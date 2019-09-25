import React, {Component} from "react";
import './auth.css'
import { withContext } from "../AppContext"

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isStudent: false,
            code: "",
            errorMessage: "",
        }
    }

    isStudent = () => {
        this.setState({
            isStudent: true,
        })
    }
    

    isTheripist = () => {
        this.setState({
            isStudent: false,
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            isStudent: false,
            code: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //if isStudent is true then this .props.history needs to push to /client Dash and a client signup.
        this.props.signup(this.state)
            .then(() => this.props.history.push("/theripistdashboard"))
            .catch(err => {
                this.setState({ errorMessage: err.response.data.message })
            })
    }
    render() {
        return (
            <div className="auth-container">
                <form className="auth-form" onSubmit={this.handleSubmit}>
                     <div className="user-type-container">
                        <div className={
                            this.state.isStudent ? "user-type not-selected": " user-type selected"} 
                            onClick={this.isTheripist}>Theripist</div>
                        <div className={
                            this.state.isStudent ? "user-type selected": "user-type not-selected"} onClick={this.isStudent}>Student</div>
                    </div>
                    <input className="auth-input" onChange={this.handleChange} value={this.state.username} name="username" type="text" placeholder="username" />
                    <input className="auth-input" onChange={this.handleChange} value={this.state.password} name="password" type="text" placeholder="password" />
                     {
                        this.state.isStudent
                            ?
                            <input className="auth-input student-code" onChange={this.handleChange} value={this.state.code}  name="code" type="text" placeholder="code" />
                            :
                            <div></div>
                    }
                    <label className="remember-switch">
                        <input className="no-input" type="checkbox" />
                        <span className="slider" />
                    </label>
                    <span className="remember-text">Remember password</span>
                    <button className="auth-button" type="submit" onSubmit={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}
export default withContext(Signup);