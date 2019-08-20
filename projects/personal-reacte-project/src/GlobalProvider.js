import React from 'react'
import axios from 'axios';

const { Consumer, Provider } = React.createContext()

class GlobalProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            countryCodes: [],
            rate: "0.00",
            resultAmount: "0.00",
            saved:[]
        }
    
    }
    
    globalSubmit = (from, to, amount) => {
        axios.get(`https://data.fixer.io/api/convert?access_key=e99f1218ad91423282c6bb4d9013b35b&from=${from}&to=${to}&amount=${amount}`).then(response => {
            this.setState({ rate: response.data.info.rate})
            this.setState({ resultAmount: response.data.result })
        })
    }
    globalSave = () => {

        this.setState(prevState => ({
            saved: [...prevState.saved, {option1:this.state.option1, option2:this.state.option2, savedrate: this.state.rate, savedAmount: this.state.resultAmount }]
        }))
    }

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
