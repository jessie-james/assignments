import React from 'react'
import Nav from './Nav'
import Body from './Body'
import Footer from './Footer'
import './styles.css'


const App = () => {
    return (
        <div className="app-container">
            <Nav/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default App