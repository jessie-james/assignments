import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav.js'
import Home from './Home.js'
import CharacterList from './CharacterList'
import './style.css'


const App = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/character_list" component={CharacterList} />
                <Route path="/" component={Home} />
            </Switch>

        </div>
    )
}
export default App