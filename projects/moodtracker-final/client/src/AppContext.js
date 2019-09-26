import React, { Component } from "react";
import axios from "axios";
const clientAxios = axios.create();
const surveyAxios = axios.create();

clientAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
surveyAxios.interceptors.request.use((config) => {
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
            surveys: [],
            selectedClient: {
                clientImg: "N/A",
                clientName: "N/A",
                clientphoneNum: "N/A",
                clientCode: "N/A",
            },
            selectedCode:"",
            selectedSurvey: {
                moodQuestion: "N/A",
                extraQuestion: "N/A",
                clientCode: "N/A",
            },
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getClients();
        this.getSurveys();
        
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
                    return { clients: [...prevState.clients, response.data], selectedClient: response.data }
                });
                return console.log(response.data);
            })
    }
    

    getClients = () => {
        return clientAxios.get("/api/client")
            .then(response => {
                this.setState({ clients: response.data });
                return response;
            })
            .catch(err => {
                console.log(err)
            })
    }

    
    getClient = (clientId) => {
        if (clientId && this.state.clients.length > 0) {
            const selected = this.state.clients.find(function (selected) {
                return selected._id === clientId;
            })
            this.setState({
                selectedClient: selected
            })
        }
        //send back to dash. push hsitory / theripist dash
    }
   
    editClient = (clientId, client) => {
        return clientAxios.put(`/api/client/${clientId}`, client)
            .then(response => {
                this.setState(prevState => {
                    const updatedClients = prevState.clients.map(client => {
                        return client._id === response.data._id ? response.data : client
                    })
                    return { clients: updatedClients }
                })
                return response;
            })
    }

    deleteClient = (clientId) => {
        return clientAxios.delete(`/api/client/${clientId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedClients = prevState.clients.filter(client => {
                        return client._id !== clientId
                    })
                    return { clients: updatedClients }
                })
                return response;
            })
    }

    addSurvey = (newSurvey) => {
        return surveyAxios.post("/api/survey/", newSurvey)
            .then(response => {
                this.setState(prevState => {
                    return { surveys: [...prevState.surveys, response.data] }
                });
                return response;
            })
    

    }
    getSurveys = () => {
        return clientAxios.get("/api/survey")
            .then(response => {
                this.setState({ surveys: response.data });
                return response;
            })
            .catch(err => {
                console.log(err)
            })
    }

    getSurvey = (clientCode) => {
        console.log(clientCode)
        const selectSurvey = this.state.surveys.find(function (selectSurvey) {
            return selectSurvey.clientCode === clientCode;
        })
        this.setState({
            selectedSurvey: selectSurvey
        })
    }
    //send back to dash. push hsitory / theripist dash
    
    getSurvey = (suveyId) => {
        return surveyAxios.get("/api/survey")
            .then(response => {
                this.setState({ surveys: response.data });
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
                    getClients: this.getClients,
                    addClient: this.addClient,
                    getClient: this.getClient,
                    deleteClient: this.deleteClient,
                    addSurvey: this.addSurvey,
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

