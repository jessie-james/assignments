import React from 'react'
import {withGlobal} from './GlobalProvider'
const ListItem = (props) => {
    return (
        <div className="list-container">
            <div className="saved-country" style={{ color: props.item.fromColor }} >{props.item.savedCode1}</div>
            <h3>Exchange Rate ={props.item.savedrate} </h3>
            <div className="saved-country" style={{ color: props.item.toColor }}>{props.item.savedCode2}</div>
            <div className="delete-button" onClick= {() => props.deleteItem(props.item)}><button>delete</button></div>
        </div>
    )
}
export default withGlobal(ListItem)