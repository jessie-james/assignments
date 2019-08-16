import React from 'react'
import axios from 'axios';
class Todo extends React.Component{
    constructor(props) {
        super()
        let { title, desciption, price, image, _id} = props.todoArr
        this.state = {
            title: title,
            description: desciption,
            price: price,
            imgUrl: image 
        }
    }
    // handleChange = (e) => {
    //     let { name, value } = e.target
    //     this.setState({ [name]: value })
    // }
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.put(`https://api.vschool.io/jessie_mae/todo/${this.props.todo_id}`, editedTodo)
    // }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.desciption}</p>
                <h4>{this.state.price}</h4>
            </div>)
       
   }
    
}
export default Todo