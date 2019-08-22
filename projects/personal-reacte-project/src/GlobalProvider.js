import React from 'react'
import axios from 'axios';

const { Consumer, Provider } = React.createContext()
class GlobalProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            number: "1",
            option1: "USD",
            option2: "EUR",
            countryCodes: [],
            rate: "0.00",
            reversRate: "0.00",
            resultAmount: "0.00",
            fromColor: '',
            toColor: '',
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
        axios.get(`https://data.fixer.io/api/convert?access_key=e99f1218ad91423282c6bb4d9013b35b&from=${option2}&to=${option1}&amount=${number}`).then(response => {
            this.setState({
                reversRate: response.data.info.rate
            })
        })
        axios.get(`https://data.fixer.io/api/convert?access_key=e99f1218ad91423282c6bb4d9013b35b&from=${option1}&to=${option2}&amount=${number}`).then(response => {
            this.setState({ rate: response.data.info.rate, resultAmount: response.data.result }, () => {
                if (this.state.rate > 10) {
                    this.setState({ fromColor: 'darkgreen' , toColor: 'red'})
                } else if (this.state.rate > 2) {
                    this.setState({ fromColor: 'lightgreen' , toColor: 'orange'})
                } else if (this.state.rate > 0.2) {
                    this.setState({ fromColor: 'yellow' , toColor: 'yellow'})
                } else if (this.state.rate > 0.05) {
                    this.setState({fromColor:'orange', toColor: 'lightgreen'})
                }else if (this.state.rate <= 0.05){
                    this.setState({ fromColor: 'red' , toColor: 'darkgreen'})
                } else {
                    console.log('fired')
                }
            })
        })
    }

    // mysaved = (e) => {
    //     e.preventDefault()
    //     localStorage.setItem('saved', JSON.stringify({ savedCode1: this.state.option1, savedCode2: this.state.option2, savedrate: this.state.rate, savedAmount: this.state.resultAmount }))
    //     const savedArr = JSON.parse(localStorage.saved);
    //     this.setState(prevState => ({ saved: [...prevState.saved, savedArr] }))
    //     console.log("fired")
    // }


    globalSave = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            saved: [...prevState.saved, { savedCode1: prevState.option1, savedCode2: prevState.option2, savedrate: prevState.rate, savedAmount: prevState.resultAmount, fromColor:prevState.fromColor, toColor:prevState.toColor }]
        })
            // return {
            //     saved: [...prevState.saved, {savedCode1:prevState.option1, savedCode2:prevState.option2, savedrate: prevState.rate, savedAmount: prevState.resultAmount }]
            // }
        )
        
    }
    
    getList = () => {
        const savedArr = JSON.parse(localStorage.saved);
        this.setState(prevState => ({ saved: [...prevState.saved, savedArr] }))
    
   }
    getCodes = () => {
        axios.get('https://data.fixer.io/api/latest?access_key=e99f1218ad91423282c6bb4d9013b35b').then(response => {
            this.setState({
                countryCodes: Object.keys(response.data.rates)
            })
        }) 
    }
    deleteItem = (myitem) => {
        this.setState(prevState => ({
            saved: prevState.saved.filter(item => item !== (myitem))
        })) 
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
                getList: this.getList,
                deleteItem: this.deleteItem,
                mysaved:this.mysaved,
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
