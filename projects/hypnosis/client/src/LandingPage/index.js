import React ,{Component} from "react"
import Popup from "./Popup"
import { Link } from "react-router-dom"

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div className="homeContainer">
                <div>logo</div>
                <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>
                {this.state.showPopup ?
                    <Popup text='Click "Close Button" to hide popup' closePopup={this.togglePopup.bind(this)} />
                    : null
                }
                <div>
                    carrasol
            </div>
                <div>Call Me</div>
                <Link to="/book">Book Now</Link>
            </div>
        )
    }
}
export default LandingPage;