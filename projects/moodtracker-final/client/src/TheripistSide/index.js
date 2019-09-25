import React, {Component} from "react"
import { Link } from 'react-router-dom'
import { withContext } from '../AppContext'
import ClientDashProfile from './CurrentClients/ClientDashProfile'
import './theripistdash.css'
class TheripistDash extends Component {
    componentDidMount() {
        this.props.getClients()
    }
    render() {
        const mappedClients = this.props.clients.map((client) => <ClientDashProfile key={client._id} client={client} editClient={this.props.editClient} class='profileTab-container' />)
        return (
            <div className="dashContainer">
                <div>Welcome,<span> {this.props.user.username}</span></div>
                {mappedClients}
                <div className="add-Client-link">
                    <Link className="add-div" to="/addclient">+</Link>
                    <Link className="link-add" to="/addclient">Add Client</Link>
                </div>
            
            </div>
        )
        
    }
}export default withContext(TheripistDash)