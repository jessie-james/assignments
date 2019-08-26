import React from 'react'
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import SavedList from './SavedList.js'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import './styles.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import { withGlobal } from './GlobalProvider'

class App extends React.Component {

    render() {
    return <div className="app-container">
        <Header />
        <Route render={({location})=>(
        <TransitionGroup>
                <CSSTransition key={location.key} timeout={3000} className='fade'>
             <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/list' component={SavedList}/>
                </Switch>
            </CSSTransition>
            </TransitionGroup>
        )}/>
        <Footer />
    </div>
}
}
export default withGlobal(App)