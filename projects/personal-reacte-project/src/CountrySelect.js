import React from 'react'
import CodeOption from './CodeOption'
import {withGlobal} from './GlobalProvider'


class CountrySelect extends React.Component {

    componentDidMount() {
        this.props.getCodes()
    }
    render() {
        const mappedcodes = this.props.countryCodes.map((code, i) => <CodeOption key={i} value={code} code={code} />)
        return (
            <select className='country-selecter' onChange={this.props.onChange} style={{ color: this.props.type === 'from' ? this.props.fromColor : this.props.toColor }}> 
                <option>Select</option>
                {mappedcodes}
            </select>
        );
    }
}
export default withGlobal(CountrySelect)
