import React, { Component } from "react";
import axios from "axios";
const clientAxios = axios.create();

clientAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
const App = React.createContext();

export class AppProvider extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }
    signup = (userInfo) => {
        return axios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    render() {
        return (
            <App.Provider
                value={{
                    signup: this.signup,
                    ...this.state
                }}
            >

                {this.props.children}

            </App.Provider>
        )
    }
}
export const withContext = Component => {
    return props => {
        return (
            <App.Consumer>
                {
                    mainState => {
                        return (
                            <Component
                                {...mainState}
                                {...props}
                            />
                        )
                    }
                }
            </App.Consumer>
        )
    }
}

