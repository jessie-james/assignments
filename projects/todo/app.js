// const axios = require("axios");

//main Function
function onPageUpload() {
    axios.get('https://api.vschool.io/jessie_mae/todo/').then(response => {
        displayList(response.data);
    });
}
onPageUpload()

function displayList(currentList) {
    currentList.forEach(listItem => {
        let li = document.createElement("li");
        let instructions = document.createElement("p");
        let price = document.createElement("p");
        let deletButton = document.createElement("button")
        deletButton.textContent = "delete"
        price.textContent = listItem.price;
        instructions.textContent = listItem.description;
        li.textContent = listItem.title;
        li.appendChild(instructions)
        li.appendChild(price)
        li.appendChild(deletButton)
        document.getElementById("toDoCheckList").appendChild(li)
        
     
      
        
        
    
        // const checkbox = document.createElement("input")
        // const imgTag = document.createElement("img")
        // imgTag = listItem.imgUrl

       
    })
}

// addButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     addToList();
// })

 
const addTodoForm = document.getElementById("todoForm")

addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault()
   addToList()
})



function addToList() {
    const newTitle = addTodoForm.newTitle.value
    const newDescription = addTodoForm.newDescription.value
    const newPrice = addTodoForm.newPrice.value
    const newTodo = {
        title: newTitle,
        description: newDescription,
        price: newPrice
    }
    axios.post("https://api.vschool.io/nateje/todo/", newTodo).then(response => {
        displayList(response.data)
    })
}


//         axios.post('https://api.vschool.io/jessie_mae/todo/', newListInput).then(function (response) {
//             displayList(response.data);
//         })  
//     }

// let newListInput = document.getElementById("todoForm")
// const addButton = document.getElementById("addItem")



// // //Axios Functions//


// // //POST
// // axios.post('https://api.vschool.io/jessie_mae/todo/', newItemInput).then(function (response) {
// //     console.log(response.data);
// // })
// // // PUT
    
// // //DELET
// //     // axios.delete("https://api.vschool.io/jonsmith/todo/" +  //singleTodoObject._id)
