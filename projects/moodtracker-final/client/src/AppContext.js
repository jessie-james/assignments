import React, { Component } from "react";
import axios from "axios";

export class AppProvider extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }
    signup = (userInfo) => { }
}