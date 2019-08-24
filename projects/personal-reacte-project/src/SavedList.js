import React from 'react'
import ListItem from './ListItem'
import {withGlobal} from './GlobalProvider'

class SavedList extends React.Component {
    
    componentDidMount() {
        this.props.viewedSaved()
    
    }
    render() {
        // if this.props.saved  had 5 items or less[] then set  height :75 hv; else if  set height 100%
        const mappedList = this.props.saved.map((item, i) => <ListItem key={i} item={item} />)

        return (
            <div className="saved-rates-container">
                <h1>Saved Exchanged Rates</h1>
                {mappedList}
            </div>
        )
    }
}
export default withGlobal(SavedList)