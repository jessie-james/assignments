import React from 'react'
const Todo = (props) => {
    let {title, desciption, price , image } = props.todo
    return (
        <div>my list
            {title}
        </div>
    )
}
export default Todo