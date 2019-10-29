import React from "react"
import "./styles.css"
import { Switch, Route } from "react-router-dom"
import LandingPage from "./LandingPage"
import Nav from './Nav'

function App() {
    return (
        <div className="full-app-container">
            <Switch>
                <Route path="/home" component={LandingPage}/>
                <Route>signin log up</Route>
                <Route>program options</Route>
                <Route>scheudle now</Route>
                <Route>admin Home</Route>
                <Route exact path="/" component={LandingPage}/>
            </Switch>
            <Nav/>
        </div>
    )
}
export default App;