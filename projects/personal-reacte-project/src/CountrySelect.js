import React from 'react'
import CodeOption from './CodeOption'
import {withGlobal} from './GlobalProvider'

class CountrySelect extends React.Component {
  
    componentDidMount() {
        this.props.getCodes()
    }

    render() {
        const mappedcodes = this.props.countryCodes.map((code, i) => <CodeOption key={i} name='selectecode'value={this.code} code={code} />)
        return (
            <select className='code-Selecter'>
                <option>select</option>
                {mappedcodes}
            </select>
        );
    }
}
export default withGlobal(CountrySelect)
