import React from 'react'
import Square from './Square'
import './style.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            box: ["black", "white", "purple", "green"]
        }
    }
    blackVWhite = () => {
        if (this.state.box[0] === "black") {
            this.setState(prevState => {
                const newBox = prevState.box.map(() => {
                    return "white"
                })
                return { box: newBox }
            })
        } else if (this.state.box[0] === "white") {
            this.setState(prevState => {
                const newBox = prevState.box.map(() => {
                    return "black"
                })
                return { box: newBox }
            })
        } else {
            console.log("failed")
        }
    }
    topBottom = () => {
        this.setState(prevState => {
            prevState.box.splice(2, 2, "purple", "purple")
            
            return {box :prevState.box }
        })
    }
  



    blueL = () => {
        this.setState(prevState => {
           return prevState.box[2] = 'blue'
        })
    
        //index2
    }
    blueR = () => {
        this.setState(prevState => {
            return prevState.box[3] = 'blue'
        })
        
    }
    customTR = () => {
        this.setState(prevState => {
            return prevState.box[1] = 'red'
        })

    }
    customTL = () => {
        this.setState(prevState => {
            return prevState.box[0] = 'yellow'
        })

    }
    customBR = () => {
        this.setState(prevState => {
            return prevState.box[3] = 'grey'
        })

    }
    customBL = () => {
        this.setState(prevState => {
            return prevState.box[2] = 'orange'
        })

    }
    render() {
        const squareS = this.state.box.map((item, i) =>
            <Square backgroundColor={item} key={i} />
        )
        return (
            <div className ="dj-container">
                {squareS}
                <div className="buttons">
                    <button onClick = {this.blackVWhite} >Black or White</button>
                    <button onClick = {this.topBottom}>Top or Bottom</button>
                    <button onClick = {this.blueL}>Bottom Blue L</button>
                    <button onClick = {this.blueR}>Bottom Blue R</button>
                    <button onClick = {this.customTR}>Top R Custom</button>
                    <button onClick={this.customTL}>Top L Custom</button>
                    <button onClick={this.customBR}>Bottom L Custom</button>
                    <button onClick = {this.customBL}>Bottom R Custom</button>
                    <button>Sounds</button>
                    <button>The Goat</button>
                </div>


            </div>
        )
        
    }
}
export default App
