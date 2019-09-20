import Navbar from "./Navbar";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import ProtectedRoute from "./Auth/ProtectedRoute";


function App() {
    return (
        <div className="app-wrapper">
            <Nav/>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <ProtectedRoute  path="/theripistdash" component={Theripist} />
                <ProtectedRoute path="/studentdash" component={Student} />
                <Route exact path="/" component={Login}/>
            </Switch>
        </div>
    )
}

export default App;
