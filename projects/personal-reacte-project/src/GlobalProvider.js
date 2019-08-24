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
            reverseRate: "0.00",
            resultAmount: "0.00",
            fromColor: '',
            toColor: '',
            isSaved: false,
            badgeNum: 1,
            isViewed:false,
            saved:JSON.parse(localStorage.getItem('saved')) || []
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
    //leave code value

    handleOptions2 = (e) => {
        let { value } = e.target;
        this.setState({ option2: value })
    }
    //leave code value

    globalSubmit = (e, option1, option2, number) => {
        e.preventDefault()
        axios.get(`https://data.fixer.io/api/convert?access_key=e99f1218ad91423282c6bb4d9013b35b&from=${option2}&to=${option1}&amount=${number}`).then(response => {
            this.setState({
                reverseRate: response.data.info.rate.toFixed(2)
            })
        })
        axios.get(`https://data.fixer.io/api/convert?access_key=e99f1218ad91423282c6bb4d9013b35b&from=${option1}&to=${option2}&amount=${number}`).then(response => {
            this.setState({ rate: response.data.info.rate.toFixed(2), resultAmount: response.data.result.toFixed(2), isSaved: false  }, () => {
                if (this.state.rate > 10) {
                    this.setState({ fromColor: '#21660C' , toColor: 'red'})
                } else if (this.state.rate > 1) {
                    this.setState({ fromColor: '#5EA10D' , toColor: '#C76718'})
                } else if (this.state.rate == 1) {
                    this.setState({ fromColor: '#E6BA1C' , toColor: '#E6BA1C'})
                } else if (this.state.rate < 1) {
                    this.setState({fromColor:'#C76718', toColor: '#5EA10D'})
                }else if (this.state.rate <= 0.1){
                    this.setState({ fromColor: 'red' , toColor: '#21660C'})
                } else {
                    this.setState({ fromColor: 'rgb(74, 73, 73)' , toColor: 'rgb(74, 73, 73)'})
                }
            })
        })
    }


    globalSave = (e) => {
        this.setState(prevState => ({
            isSaved: true, 
            isViewed: true, 
            saved: [...prevState.saved, { savedCode1: prevState.option1, savedCode2: prevState.option2, savedrate: prevState.rate, savedAmount: prevState.resultAmount, fromColor: prevState.fromColor, toColor: prevState.toColor, }],
            badgeNum: this.state.saved.length + 1
        }),
            () => {
                localStorage.setItem('saved', JSON.stringify(this.state.saved))
            }) 
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
            badgeNum: this.state.saved.length - 1,
            saved: prevState.saved.filter(item => item !== (myitem))
        }), ()=> localStorage.setItem('saved', JSON.stringify(this.state.saved))) 
    }
    viewed = () => {
        this.setState({ fromColor: 'rgb(74, 73, 73)', toColor: 'rgb(74, 73, 73)', number:"", })
    }
    viewedSaved = () => {
        this.setState({ isViewed: false })
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
                mysaved: this.mysaved,
                viewed:this.viewed,
                viewedSaved: this.viewedSaved, 
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
