import React from "react";
const English = () => {
    return (
        <div className="english-main-container">
            <h1 className="main-info-Header">Voter Registration info for Utah</h1>
            <div className="info-container">
                <h5 className="info-header">Registation is requiered</h5>
                <p className="info-paragraph">Recently turn 18? Want to change your party affilation?
                    Your voter registration address is wrong? 
                    Make sure you are eligible to vote in this next election.
                    Take a few minutes and complete the voter registration form before it is too LATE</p>
            </div>
            <div className="info-container">
                <h5 className="info-header">Pre-Registration</h5>
                <p className="info-paragraph">16-year-olds and up can pre-register to vote.
                     On your 18th birthday, your voter registration application will be fully processed.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header"> Same Day Registration</h5>
                <p className="info-paragraph">Utah <span className="important-info">does not offer the opportunity</span> to register
                     to vote on Election Day.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header">Automatic Voter Registration</h5>
                <p className="info-paragraph">Utah does not automatically register eligible
                    citizens to vote when they go to a government agency, like the DMV.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header">If You've Moved</h5>
                <p className="info-paragraph">Utah requires registrants to live in the state
                    for at least <span className="important-info">30 days</span> before registering to vote.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header"> Documentation Requirements</h5>
                <p className="info-paragraph">When submitting a voter registration application,
                    no additional documents are required for your registration to be processed.
                    BUT you will need to know <span className="important-info">state-issued license/ID number</span>
                    or<span className="important-info">last 4 digits of your SSN</span>
                    The state confirms your citizenship and eligibility through the information
                    provided on your registration form.</p>
            </div>
            <div className="info-container">
                <h5 className="info-header"> Restoration of Voting Rights</h5>
                <p className="info-paragraph">In Utah, the voting rights of convicted persons are
                     automatically restored upon release. BUT you must re-register to vote
                     after your release.</p>
            </div>
        </div>
    )
};
export default English