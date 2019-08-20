import React from 'react'
const ListItem = (props) => {
    console.log(props.item)
    return (<div>
        <h1>{props.item.savedrate}</h1>
        <h1>{props.item.savedamount}</h1>
    </div>
    )
}
export default ListItem