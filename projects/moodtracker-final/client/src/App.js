import React from "react"
import {Route, Switch} from "react-router-dom"
import Nav from "./Nav";
import Login from './Auth/login';
import './moodtrackmain.css'
import Signup from "./Auth/signup";
import TheripistDash from "./TheripistSide";
import AddClientSurvey from "./TheripistSide/AddClientSurvey/index.js"
// import ProtectedRoute from "./Auth/ProtectedRoute";


function App() {
    return (
        <div className="app-wrapper">
            <Nav/>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={TheripistDash} />
                <Route path="/addclient" component={AddClientSurvey} />
                {/* <ProtectedRoute  path="/theripistdash" component={Theripist} />
                <ProtectedRoute path="/studentdash" component={Student} /> */}
                <Route exact path="/" component={Login}/>
            </Switch>
        </div>
    )
}

export default App;
