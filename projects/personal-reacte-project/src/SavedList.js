import React from 'react'
import ListItem from './ListItem'
import {withGlobal} from './GlobalProvider'

const SavedList = (props) => {
    const mappedList = props.saved.map((item, i) => <ListItem item={item} />)

    return (
        <div className="saved-rates-container">
            {mappedList} 
        </div>
    )
}
export default withGlobal(SavedList)