import React from "react"
import {Route, Switch} from "react-router-dom"
import Nav from "./Nav";
import Login from './Auth/login';
import './moodtrackmain.css'
import Signup from "./Auth/signup";
import TheripistDash from "./TheripistSide";
import AddClient from "./TheripistSide/AddClientSurvey/index.js"
import CreateSurvey from "./TheripistSide/AddClientSurvey/CreateSurvey.js"
import ClientProfile from "./TheripistSide/CurrentClients/ClientProfile"
// import ClientProfile from './TheripistSide/CurrentClients/FullProfile/ClientProfile.js'
import ProtectedRoute from "./Auth/ProtectedRoute";


function App() {
    return (
        <div className="app-wrapper">
            <Nav/>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/theripistdashboard" component={TheripistDash} />
                <ProtectedRoute path="/addclient" component={AddClient} />
                <ProtectedRoute path="/addsurvey" component={CreateSurvey} />
                <ProtectedRoute path="/clientProfile/:_id/" component ={ClientProfile}/>
                <Route exact path="/" component={Signup}/>
            </Switch>
        </div>
    )
}

export default App;
