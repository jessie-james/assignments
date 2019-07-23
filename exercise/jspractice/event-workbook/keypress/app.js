/* You're task is to display to the user the key and key code they press

Example of output: You've pressed the "a" key. It's key code is 65

Wes Bos made this https://keycode.info/ for us to use as an example */





let coded = document.getElementById("output");

document.addEventListener("keypress", function uniKeyCode(event) {
    let key = event.keyCode;
    coded.innerHTML = `You pressed ${event.key}. Its code is ${key}`;
    
})


