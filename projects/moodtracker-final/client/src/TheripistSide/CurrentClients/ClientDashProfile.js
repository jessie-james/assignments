import React from "react"
import {Link} from "react-router-dom"
import './clientDashProfile.css'
import { withContext } from "../../AppContext"

function ClientDashProfile(props) {
    const { _id } = props.client 
    return (
        <div className="profileTab-container">
            <div className="basic-client-info">
                {props.client.clientImg ?
                    <img alt="client-img" className="client-img" src={props.client.clientImg}></img>
                :   <img alt="client-img" className="client-img" src="data:image/png;base64,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"></img>
                }              
                <div className="client-info">
                    <h4>Name:  {props.client.clientName}</h4>
                    <h5>Phone Number: {props.client.clientphoneNum}</h5>
                </div>
                <div className="profile-code">{props.client.clientCode}</div>
            </div>
            <div className="profile-icons">
                <div className="p-icon" onClick={() => props.deleteClient(props.client._id)}><img alt="icon-img" className="icon-img" src="data:image/png;base64,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"></img></div>
                <div className="p-icon" onClick={() => props.editClient(props.client._id)}><img alt="icon-img" className="icon-img" src="data:image/png;base64,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"></img></div>
                <Link to={`/clientProfile/${_id}`} className="p-icon" client={props.client}>Profile</Link>
            </div>
        </div>
    )
} export default withContext(ClientDashProfile)