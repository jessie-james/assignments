import React from 'react'
import Badge from './Badge.js'

 class Badges extends React.Component {
     constructor() {
         super()
         this.state = {
             badges: [],
             firstName: "",
             lastName: "",
             email: "",
             birthPlace: "",
             phone: "",
             favFood: "",
             aboutYou: "",
         }
     }
     handleChange = (event) => {
         const { name, value } = event.target;
         this.setState({ [name]: value });
     }

     handleSubmit = (event) => {
         event.preventDefault();
         let { firstName, lastName, email, birthPlace, phone, aboutYou, favFood } = this.state;
         const newBadge = {
             firstName,
             lastName,
             email,
             birthPlace,
             aboutYou,
             favFood,
             phone
         };
         this.setState(prevState => { return { badges: [newBadge, ...prevState.badges] } });
         
     }
     
     render() {
         const mappedBadges = this.state.badges.map(badge => <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email}/>)
         return(
             <div className="badges">
                 <div className="badge-form">
                    <h1>Badge</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="firstName" value={this.state.firstName}  placeholder="First Name" onChange={this.handleChange}></input>
                        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}></input>
                        <input type="text" name="email" value={this.state.email} placeholder="Email Address" onChange={this.handleChange}></input>
                        <input type="text" name="birthPlace" value={this.state.birthPlace} placeholder="Place of Birth" onChange={this.handleChange} ></input>
                        <input type="text" name="phone" value={this.state.phone} placeholder="Phone Number" onChange={this.handleChange}></input>
                        <input type="text" name="favFood" value={this.state.favFood} placeholder="Your Favorite Food" onChange={this.handleChange}></input>
                        <input type="text" name="aboutYou" value={this.state.aboutYou} placeholder="Tell us about yourself"onChange={this.handleChange} className="paragraphInput"></input>
                        <button>Submit</button>
                    </form>
                 </div>
                 
                 <div className="badgeList">
                     {mappedBadges}
                </div>
         </div>
         )} 
} export default Badges