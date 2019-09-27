import React, { Component }from 'react';
import './survey.css'
import { withContext } from "../../AppContext"

class CreateSurvey extends Component {
    constructor(props) {
        super();
        this.state = {
            moodQuestion: "",
            extraQuestion: "",
            clientCode:props.selectedClient.clientCode|| "missing Code",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            moodQuestion: "",
            extraQuestion: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSurvey(this.state)
            .then(() => this.props.history.push("/theripistdashboard"))
            .catch(err => {
                this.setState({ errorMessage: "Both Questions are required" })
            })
    }

    render() {
        return (
            <div className="add-client-survey">
                <form onSubmit={this.handleSubmit}>
                    <div className="moodquestion-container questions-container">
                        <label>Customize your mood question</label>
                        <input type="text" value={this.state.moodQuestion} name="moodQuestion" id="moodQuestion" onChange={this.handleChange} placeholder="ex: How do you feel?" />
                        <div className="emoj-container">
                            <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Sad_Face_Emoji_Icon_ios10_large.png?v=1542436019" />
                            <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016" />
                            <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Expressionless_Face_Emoji_large.png?v=1480481052" />
                            <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png?v=1480481059" />
                            <img alt="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1480481056" />
                        </div>
                    </div>
                    <div className="extra-Question questions-container">
                        <label>Add a question based on your client's needs</label>
                        <input type="text" value={this.state.extraQuestion}name="extraQuestion" id="extraQuestion" onChange={this.handleChange} placeholder="ex: Did you eat today?" />
                    </div>
                    <button className="add-new-button client-button" onSubmit={this.handleSubmit}>Add New Survey</button>
                </form>
                {
                    this.state.errorMessage &&
                    <p className="error-message-moodtracker">{this.state.errorMessage}</p>
                }
                
            </div>
        )
    }
}
export default withContext(CreateSurvey )            