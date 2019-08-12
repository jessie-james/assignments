import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            fName: '',
            mName: '', 
            lName: '',
            allNames:['jess']
        }
    }
    handleName = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value
        })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { fName, mName, lName } = this.state
        const yourName = ` ${fName} ${mName} ${lName}`;
        this.setState(prevState => {
            return ({
                allNames: [...prevState.allNames, yourName],
                fName: '',
                mName: '',
                lName: '',
            })
        
        })

    }      

    render() {
        const mappedOutNames = this.state.allNames.map((name, i) => {
            return (
                <h1 key={i}>{name}</h1>
            )
        })
        return <div> 
                 <form action="" onSubmit= {this.handleSubmit} >
                    <input type="text" name='fName' value={this.state.fName} onChange ={this.handleName} />
                    <input type = "text" name ="mName" value ={this.state.mName} onChange ={this.handleName}/>
                    <input type="text" name ="lName" value ={this.state.lName} onChange ={this.handleName} />
                    <button>What is your Name?</button>
                </form>
                <h1>
                     {mappedOutNames}
                </h1>
            </div>
    }
}
export default App
