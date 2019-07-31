
let currentList = document.getElementById("list")

//GET//
function getToDos() {
    axios.get("https://api.vschool.io/jessie_mae/todo/").then(response => {
        display(...response.data) 

    })
}

function display(...listItems) {
    listItems.forEach(todoItem => {
        let div = document.createElement("div");
        let descrip = document.createElement("p")
        let li = document.createElement("li")
        let price = document.createElement("p")
        let img = document.createElement("img")
        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = todos[i].completed
        img.src = todoItem.imgUrl
        price.textContent = todoItem.price
        div.setAttribute("class", "listDiv")
        descrip.textContent = todoItem.description
        li.textContent = todoItem.title;
        div.appendChild(img)
        div.appendChild(price)
        div.appendChild(descrip)
        div.appendChild(li)
        currentList.appendChild(div)
    })

}
getToDos()

//POST//

const addToDoButton = document.getElementById("submit")
const addToDoForm = document.addTodoForm

function makeToDos() {
    const newTitle = addToDoForm.title.value
    //descrip desctrips imgurl
    const newTodo = {
        title: newTitle
        //add thenew descrip etc.
    }
    axios.post("https://api.vschool.io/jessie_mae/todo/", newTodo).then(response => {
        display(response.data)
        // let li = document.createElement("li");
        // li.textContent = newTodo.title;
        // //li netodo.descrip
        // currentList.appendChild(li)
    })
}

addToDoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    makeToDos()
})

//PUT//
function updateTodo() {
    
}

//DELETE//

//////picture.src =todo.imgURL

//         let li = document.createElement("li");
//         let instructions = document.createElement("p");
//         let descrip = document.createElement("p");
//         let deletButton = document.createElement("button")
//         deletButton.textContent = "delete"
//         descrip.textContent = listItem.descrip;
//         instructions.textContent = listItem.description;
//         li.textContent = listItem.title;
//         li.appendChild(instructions)
//         li.appendChild(descrip)
//         li.appendChild(deletButton)
//         document.getElementById("list").appendChild(li)






//         // const checkbox = document.createElement("input")
//         // const imgTag = document.createElement("img")
//         // imgTag = listItem.imgUrl


//     })
// }




// const addToDoButton = document.getElementById("submit")
// const addToDoForm = document.addToDoForm

// addToDoButton.addEventListener("click", (event) => {
//     event.preventDefault()
//     makeToDos()

// })
    