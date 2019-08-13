import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Services from './Services'
import About from './About'
import Home from './Home'
import './styles.css'
import { Switch, Route } from 'react-router-dom'


function App () {
    return (
        <div>
             <Nav />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About} />
                <Route path='/services' component ={Services}/>
            </Switch>
            <Footer />  
        </div>
    )
}
export default App