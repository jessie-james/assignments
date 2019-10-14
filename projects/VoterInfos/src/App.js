import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav"
import English from "./English"
import Espanol from "./Espanol"

const App = () => {
    return (
        <div className="main-app-container">
            <Nav />
            <Switch>
                <Route exact path='/' component={English} />
                <Route path='/English' component={English} />
                <Route path='/Espanol' component={Espanol} />
             </Switch>
        </div>
    )
}
export default App;