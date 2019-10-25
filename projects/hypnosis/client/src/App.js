import React from "react"
import{Switch, Route} from "react-router-dom"

function App() {
    return (
        <div className="full-app-container">
            <Switch>
                <Route>Landing page</Route>
                <Route>signin log up</Route>
                <Route>program options</Route>
                <Route>scheudle now</Route>
                <Route>admin Home</Route>
            </Switch>
        </div>
    )
}
export default App;