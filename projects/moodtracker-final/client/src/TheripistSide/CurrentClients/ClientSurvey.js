import React, {Component} from 'react';
import '../AddClientSurvey/survey.css'
import { withContext } from "../../AppContext"

class ClientSurvey extends Component {
    // componentDidMount() {
    //     this.props.getClients();
    //     this.props.getClient(this.props.match.params._id);
    // }
    
    render() {
        let survey = this.props.surveys.find(survey => survey.clientCode === this.props.code)
        survey === undefined ? survey = { moodQuestion: '', extraQuestion: '' } : null
        console.log(survey)
        return (
            <div className="add-client-survey">
                <h5>{survey.moodQuestion}</h5>
                <div className="moodquestion-container questions-container">
                    <label>Customize your mood question</label>
                    <h5>{survey.extraQuestion}</h5>
                    <div className="emoj-container">
                        <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Sad_Face_Emoji_Icon_ios10_large.png?v=1542436019" />
                        <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016" />
                        <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Expressionless_Face_Emoji_large.png?v=1480481052" />
                        <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png?v=1480481059" />
                        <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1480481056" />
                    </div>
                </div>
                {/* results */}
                </div>
    
        )
    }
}
export default withContext(ClientSurvey)

         


