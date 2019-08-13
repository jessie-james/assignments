import React, { Component } from 'react'
import axios from 'axios'
import Person from './Person.js'
class App extends Component { 
    constructor() {
        super() 
        this.state = {
            hitlist:[]
        }
    }

    componentDidMount() {
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
            this.setState({ hitlist: response.data });
        })
    }

    render() {
        
        const mappedPeeps = this.state.hitlist.map((peeps, i) => {
            return (
                <Person key={i} name={peeps.name} image={peeps.image} />
            )
        })

        return (

            <div>
                { mappedPeeps }
            </div>
        )  
    }
}
export default App