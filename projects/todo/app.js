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



// function addToList() {
//     addButton.addEventListener("click", e); {
//         e.preventDefault()
//         axios.post('https://api.vschool.io/jessie_mae/todo/', newListInput).then(function (response) {
//             displayList(response.data);
//         })  
//     }
// }
// let newListInput = document.getElementById("todoForm")
// const addbutton = document.getElementById("add")



// // //Axios Functions//

// // //GET
// // axios.get('https://api.vschool.io/jessie_mae/todo').then((response) =>{
// //     const toDoList = response.data;
// //    return toDoList
// // });
// // //POST
// // axios.post('https://api.vschool.io/jessie_mae/todo/', newItemInput).then(function (response) {
// //     console.log(response.data);
// // })
// // // PUT
    
// // //DELET
// //     // axios.delete("https://api.vschool.io/jonsmith/todo/" +  //singleTodoObject._id)
