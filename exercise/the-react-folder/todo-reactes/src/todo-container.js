import React from 'react'
import axios from 'axios'
import Todo from './todo.js'

class TodoContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            todoArr: [],

        }
    }
    componentDidMount() {
        axios.get(`https://api.vschool.io/jessie_mae/todo/`).then(response => {
            this.setState({todoArr:response.data})
        })
    }
    render() {
        const mappedtodoArr = this.state.todoArr.map((todo, i) => <Todo key={i + todo.tile} todo={todo} />)
        return (
            <div className="todo-continer">
                {mappedtodoArr}
             </div>                
        )}
}

export default TodoContainer