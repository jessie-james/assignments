import React from "react";
import './login.css'

function Login() {
    return (
        <div className="login-container">
            <form>
                <div className="user-type-container">
                    <div className="user-type">Theripist</div>
                    <div className="user-type">Student</div>
                </div>
                <input value="userName" name="userName" type="text" placeholder="username" />
                <input value="password" name="password" type="text" placeholder="password" />
                <button type="submit">Submit</button>
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

