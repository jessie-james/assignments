import React from "react";
import { Switch, Route } from "react-browser-router";
import Nav from "./Nav"
import English from "./English"
import Espanol from "./Espanol"

const App = () => {
    return (
        <div className="main-app-container">
            <h1>hellow</h1>
            <Nav />
            <Switch>
                <Route exact path='/' component={English} />
                <Route path='/Espanol' component={Espanol} />
             </Switch>
        </div>
    )
}
export default App;