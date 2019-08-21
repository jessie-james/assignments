import React from 'react'
import CodeOption from './CodeOption'
import {withGlobal} from './GlobalProvider'


class CountrySelect extends React.Component {
    constructor() {
        super()
        this.state = {  
        }
    }
    componentDidMount() {
        this.props.getCodes()
    }
    render() {
        const mappedcodes = this.props.countryCodes.map((code, i) => <CodeOption key={i} value={code} code={code}  />)
        return (
            <select className='code-Selecter' onChange={this.props.onChange} >
                <option>select</option>
                {mappedcodes}
            </select>
        );
    }
}
export default withGlobal(CountrySelect)
