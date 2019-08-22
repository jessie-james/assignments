import React from 'react'
import ListItem from './ListItem'
import {withGlobal} from './GlobalProvider'

class SavedList extends React.Component {
    constructor() {
        super()
        this.state ={

        }
        
    }
    componentDidMount() {
        // this.props.getList()
    
    }
    render() {
        const mappedList = this.props.saved.map((item, i) => <ListItem key={i} item={item} />)

        return (
            <div className="saved-rates-container">
                {mappedList}
            </div>
        )
    }
}
export default withGlobal(SavedList)