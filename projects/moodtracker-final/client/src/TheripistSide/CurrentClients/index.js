import React, { Component } from 'react';
import ClientSurvey from './ClientSurvey'
import ClientProfile from './ClientProfile'
import './clientProfile.css'
import '../../AddClientSurvey/survey.css'
import { withContext } from "../../../AppContext"

class FullProfile extends Component {
    componentDidMount() {
        this.props.getClients();
        this.props.getClient(this.props.match.params._id);
    }

    render() {
        return (
            <div className="full-profile">
                <ClientProfile />
                <ClientSurvey />
            </div>
        )
    }
}
export default withContext(FullProfile)