import React from 'react'
const CodeOption = (props) => { 
  
    return (
        <option className="country-Code-selecter" value={props.code}>{props.code}</option>
    )
}
export default CodeOption