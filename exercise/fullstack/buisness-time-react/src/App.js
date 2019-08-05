import React from 'react'
import Nav from './Nav.js'
import Body from './Body.js'
import Footer from './Footer.js'
import './styles.css'


const App = () => {
    return (
        <div className="app-container">
            <Nav />
            <Body />
            <Footer/>
        </div>
    )
}

export default App