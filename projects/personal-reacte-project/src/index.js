import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import GlobalProvider from './GloblProvider.js'
import App from './App.js'

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"))