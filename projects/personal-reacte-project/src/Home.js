import React from 'react'
import CountrySelect from './CountrySelect.js'
import { withGlobal } from './GlobalProvider'

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            number: "",
            option1: "",
            option2: ""

        }
    }
    amountChange = e => {
        let {value } = e.target;
        this.setState({number: value })
    }

    handleOptions1 = (e, type) => {
        let { value } = e.target;
        this.setState({ option1: value })
    }

    handleOptions2 = (e, type) => {
            let { value } = e.target;
            this.setState({ option2: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.globalSubmit(this.state.option1, this.state.option2, this.state.number)
    }

   
    render() {
        const rates = this.props.rate;
        const resultAmount = this.props.resultAmount;

        return (
            <div className="home">
                <form className="currancyform" onSubmit={this.handleSubmit}>
                    <input type="number" name='amount' value={this.state.number} placeholder="Amount" onChange={this.amountChange}></input>
                    <CountrySelect type='from' onChange={this.handleOptions1} />
                    <div>=></div>
                    <CountrySelect type='to' onChange={this.handleOptions2} />
                    <div>=</div>
                    <button className="submit">Convert</button>
                </form>
                <>
                    <div className="returned-results">
                        <h1>{rates}</h1>
                        <h3>ExchangeRate</h3>
                    </div>
                    <div className="returned-results">
                        <h1>{resultAmount}</h1>
                        <h3>Exchanged Amount</h3>
                    </div>
                    <button className="save" onClick={this.props.globalSave}>Save</button>
                </>
            </div>
        )
    }
}
export default withGlobal(Home)