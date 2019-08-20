import React from 'react'
const CodeOption = (props) => {
    console.log (props.code)
    return (
        <option className="country-Code-selecter">{props.code}</option>
    )
}
export default CodeOption