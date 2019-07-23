

let headerInput = document.getElementsByClassName("header")[0];
headerInput.innerHTML = `<h1> JavaScript Made This </h1>`;


let newDiv = document.createElement("div");
let g = document.createElement("SPAN");
let f = document.createTextNode("Jess Mae");
g.classList.add("name");
g.appendChild(f);
newDiv.appendChild(g); 

// <div><g=span>JessMae=f<span>< div>



let newContent = document.createTextNode(" wrote the JavaScript");
newDiv.appendChild(newContent);
headerInput.appendChild(newDiv);

// <div new div><g=span>JessMae=f<span>< div>

let clearit = document.getElementById("clear-button")
clearit.addEventListener("click", function () {
    let cleared = document.getElementsByClassName("messages")[0]
    cleared.textContent = "  ";
    
})

let newMessagesL1 = document.getElementsByClassName("message right")[0]
let newMessagesR1 = document.getElementsByClassName("message left")[0]
let newMessagesL2 = document.getElementsByClassName("message right")[1]
let newMessagesR2 = document.getElementsByClassName("message left")[1]
newMessagesL1.textContent = "Hi Lovley, How are you today";
newMessagesR1.textContent = "I am great darling ";
newMessagesL2.textContent = "Would you like to get a cup of tea";
newMessagesR2.textContent = "I would love that. Thank you for the invitation";



let themeOne = document.getElementById("themeOne")
let themeTwo = document.getElementById("themeTwo")
const messages =document.getElementsByClassName("messages")[0]

function changeColor(event) {
    if (event.target.value === "theme-one") {
        messages.style.backgroundColor = "black";
        messages.style.color = "blue";
    } else if (event.target.value === "theme-two") {
        messages.style.backgroundColor = "brown";
        messages.style.color = "red";
    } else {
        messages.style.backgroundColor = "white";
    }
}
const myTheme = document.getElementById("theme-drop-down");
myTheme.addEventListener("change", changeColor);


// Be able to add more messages using the form at the bottom.
const send = document.querySelector("#send");
const message = document.getElementById("newMessage") ;
send.addEventListener("click", function (event) {
    event.preventDefault();
    input = document.querySelector("#input").value;
    message.innerHTML = input;
})


  
  
  
  
  
  
  
  
