import React from 'react'
import CountrySelect from './CountrySelect.js'
import { withGlobal } from './GlobalProvider'

class CurrancyForm extends React.Component {
    componentDidMount() {
        this.props.viewed()
    }
    render() {
        return (
            <form className="currancyform" onSubmit={(e) => this.props.globalSubmit(e, this.props.option1, this.props.option2, this.props.number)}>
                <input type="number" name='amount' value={this.props.number} placeholder="Amount" onChange={this.props.amountChange}></input>
                <div className="mobile-form">
                    <CountrySelect type='from' onChange={this.props.handleOptions1} />
                    <i className="fa fa-exchange fa-3x"></i>
                    <CountrySelect type='to' onChange={this.props.handleOptions2} />
                </div>
                <button className="submit">SUBMIT</button>
            </form>
        )
    }
}
export default withGlobal(CurrancyForm)
