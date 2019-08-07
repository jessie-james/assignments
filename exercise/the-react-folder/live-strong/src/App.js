import React from 'react'
import Nav from './Nav.js'
import Home from './Home.js'
import WhyUs from './Why-us'
import './styles.css'

const App = () => {
    return (
        <div className="app-container">
            <Nav />
            <Home />
            <WhyUs/>
        </div>
    )
}
export default App