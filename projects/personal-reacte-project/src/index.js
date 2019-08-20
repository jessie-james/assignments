import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import GlobalProvider from './GlobalProvider'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(<BrowserRouter><GlobalProvider><App/></GlobalProvider></BrowserRouter>, document.getElementById("root"))