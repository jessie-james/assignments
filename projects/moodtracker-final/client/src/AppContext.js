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
        return clientAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                // this.getClients();
                return response;
            })
    }

    login = (credentials) => {
        return clientAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                // this.getClients();
                return response;
            })
    }
    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            clients: [],
            user: {},
            token: ""
        })
    }

     addClient = (newClient) => {
        return clientAxios.post("/api/client/", newClient)
            .then(response => {
                this.setState(prevState => {
                    return {clients: [...prevState.clients, response.data] }
                });
                return response;
            })
     }

    getClients = () => {
        return clientAxios.get("/api/client")
            .then(response => {
                this.setState({clients: response.data });
                return response;
            })
            .catch(err => {
                console.log(err)
            }) 
    }

    render() {
        return (
            <App.Provider
                value={{
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    getClients:this.getClients,
                    addClient:this.addClient,
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

