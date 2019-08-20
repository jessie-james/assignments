import React from 'react'
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import SavedList from './SavedList.js'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import './styles.css'
import { withGlobal } from './GlobalProvider'


const App = () => {
    return <div className="app-container">
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/list' component={SavedList}/>
        </Switch>
        <Footer />
    </div>
}
export default withGlobal(App)