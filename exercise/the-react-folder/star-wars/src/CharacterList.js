import Character from './Character.js'
import axios from 'axios'
import React, { Component } from 'react'

class CharacterList extends Component {
    constructor() {
        super()
        this.state = {
            characterList: []
        }
    }
    
    componentDidMount() {
        axios.get('https://swapi.co/api/people/').then(response => {
            this.setState({ characterList: response.data.results});
            
        })
    }

    render() {
        const mappedCharacters = this.state.characterList.map((character => {
            return (
                <Character key={character._id} name={character.name} height = {character.height} />
            )
        })
        )
        console.log(mappedCharacters)
        return (
            <div className="Character-list-container">
                hellow World
                {mappedCharacters}
            </div>
        )
    }
}   
export default CharacterList
