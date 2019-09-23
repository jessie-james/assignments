import React from 'react';
import './survey.css'

function CreateSurvey(){
    return (
<div className="add-client-survey">
    <form>
        <div className="moodquestion-container questions-container">
            <label for="moodQuestion">Customize your mood question</label>
            <input type="text" value="" name="emojQuestion" id="moodQuestion" placeholder="ex: How do you feel?" />
            <div className="emoj-container">
                <img alt ="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Sad_Face_Emoji_Icon_ios10_large.png?v=1542436019" /> 
                <img alt ="emoji-img"className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016" /> 
                <img alt ="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Expressionless_Face_Emoji_large.png?v=1480481052" /> 
                <img alt ="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png?v=1480481059" /> 
                <img alt ="emoji-img" className="emoji" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Eyes_Opened_large.png?v=1480481056" /> 
            </div>
        </div>
        <div className="extra-Question questions-container">
            <label for="moodQuestion">Add a question based on your client's needs</label>
            <input type="text" value="" name="extra-question" id="extraQuestion" placeholder="ex: Did you eat today?" />
        </div>
        <button className="add-new-button survey-button">Add Survey</button>
    </form>
</div>
)}

export default CreateSurvey             