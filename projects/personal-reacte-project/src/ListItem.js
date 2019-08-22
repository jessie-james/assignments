import React from 'react'
import {withGlobal} from './GlobalProvider'
const ListItem = (props) => {
    return (
        <div className="list-container">
            <div className="saved-country" style={{ color: props.item.fromColor }} >{props.item.savedCode1}</div>
            <div className="exchanged">
                <h3>Exchange Rate </h3>
                <h3>=</h3>
                <h3>{props.item.savedrate}</h3>
            </div>
            <div className="saved-country" style={{ color: props.item.toColor }}>{props.item.savedCode2}</div>
            <div className="delete-button" onClick={() => props.deleteItem(props.item)}><button><i className="fa fa-trash fa-2x"></i></button></div>
        </div>
    )
}
export default withGlobal(ListItem)