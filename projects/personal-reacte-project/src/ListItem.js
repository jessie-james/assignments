import React from 'react'
const ListItem = (props) => {
    console.log(props.item)
    return (
        <div className="list-container">
            <div className="saved-country">country 1</div>
            <h3>Exchange Rate ={props.item.savedrate}</h3>
            <div className="saved-country">country 2</div>
            <div className="delete-button"><button>delete</button></div>
        </div>
    )
}
export default ListItem