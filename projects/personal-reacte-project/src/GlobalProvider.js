import React from 'react'
import axios from 'axios';

const { Consumer, Provider } = React.createContext()

class GlobalProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            number: "",
            option1: "",
            option2: "",
            countryCodes: [],
            rate: "0.00",
            resultAmount: "0.00",
            saved:[]
        }
    
    }

    amountChange = e => {
        let { value } = e.target;
        this.setState({ number: value })
    }

    handleOptions1 = (e) => {
        let { value } = e.target;
        this.setState({ option1: value })
    }

    handleOptions2 = (e) => {
        let { value } = e.target;
        this.setState({ option2: value })
    }

    globalSubmit = (e, option1, option2, number) => {
        e.preventDefault()
        console.log("test")
        axios.get(`https://data.fixer.io/api/convert?access_key=e99f1218ad91423282c6bb4d9013b35b&from=${option1}&to=${option2}&amount=${number}`).then(response => {
            console.log(response.data)
            console.log(option1)
            this.setState({ rate: response.data.info.rate })
            this.setState({ resultAmount: response.data.result })
        })
    }

    globalSave = () => {
        this.setState(prevState => {
            localStorage.setItem("saved", JSON.stringify([...prevState.saved, { savedrate: prevState.rate, savedAmount: prevState.resultAmount }]
            ))
            return {
                saved: [...prevState.saved, {savedCode1:prevState.option1, savedCode2:prevState.option2, savedrate: prevState.rate, savedAmount: prevState.resultAmount }]
            }
        })
    }
        
    
    // option1: this.state.option1, option2: this.state.option2, 
    getCodes = () => {
        axios.get('https://data.fixer.io/api/latest?access_key=e99f1218ad91423282c6bb4d9013b35b').then(response => {
            this.setState({
                countryCodes: Object.keys(response.data.rates)
            })
        }) 
    }
    
    render() {
        return(
            <Provider value={{
                getCodes: this.getCodes,
                globalSubmit: this.globalSubmit,
                globalSave: this.globalSave,
                amountChange: this.amountChange,
                handleOptions1: this.handleOptions1,
                handleOptions2: this.handleOptions2,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )}
}
export default GlobalProvider

export const withGlobal = Component => props =>
    <Consumer>
    {value => <Component {...value}{...props}/>}
    </Consumer>
