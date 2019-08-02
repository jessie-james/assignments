
let currentList = document.getElementById("list")

//GET//
function getToDos() {
    axios.get("https://api.vschool.io/jessie_mae/todo/").then(response => {
        display(...response.data) 

    })
}

function display(...listItems) {
    listItems.forEach(todoItem => {
        //elements created
        let div = document.createElement("div");
        let descrip = document.createElement("p")
        let li = document.createElement("li")
        let price = document.createElement("p")
        let img = document.createElement("img")
        let checkbox = document.createElement("input")
        let deleteButton = document.createElement("button")

        //element attributes
        div.setAttribute("class", "listDiv")
        descrip.textContent = todoItem.description
        li.textContent = todoItem.title;
        price.textContent = todoItem.price
        img.src = todoItem.imgUrl
        if (todoItem.imgUrl === '') {
            img.src = "https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg"
        }
        checkbox.setAttribute("type", "checkbox")
        deleteButton.setAttribute("id", "delete")
        deleteButton.textContent = ("delete")
        if (todoItem.completed) {
            li.style.textDecoration = "line-through"
        }
        // element functions
        function somefuntion() {
            axios.get(`https://api.vschool.io/jessie_mae/todo/${todoItem._id}`).then(response => {
                
            })
        }
        somefuntion()
        checkbox.addEventListener("click", (event) => { 
            const updateCheck = {
                completed: !todoItem.completed
            }
            axios.put(`https://api.vschool.io/jessie_mae/todo/${todoItem._id}`, updateCheck)
                .then(response => {
                    somefuntion()
                })
        
        })  
        
        deleteButton.addEventListener("click", (e) => {
            event.preventDefault()
            axios.delete(`https://api.vschool.io/jessie_mae/todo/${todoItem._id}`)
                .then(response => {
                    
                })
            currentList.removeChild(div)
        })

        //element display.
        div.appendChild(deleteButton)
        li.appendChild(checkbox)
        div.appendChild(img)
        li.appendChild(price)
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
    const newDescription = addToDoForm.description.value
    const newPrice = addToDoForm.price.value
    const newImg = addToDoForm.imgUrl.value
    const newTodo = {
        title: newTitle,
        description: newDescription,
        price: newPrice,
        imgUrl: newImg
    }
    axios.post("https://api.vschool.io/jessie_mae/todo/", newTodo).then(response => {
        display(response.data)
       
    })
}

addToDoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    makeToDos()
})