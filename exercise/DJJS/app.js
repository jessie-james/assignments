let box = document.getElementById("box");

box.addEventListener("mouseover", function() {
    box.style.background = "blue";
    console.log("blue");
})

box.addEventListener("mousedown", function(e) {
    box.style.background = "red";
    console.log("red");
})

box.addEventListener("mouseup", function(e) {
    box.style.background = "yellow";
    console.log("yellow");
})

box.addEventListener("mouse", function(e) {
    box.style.background = "green";
    console.log("green");
})

document.addEventListener("wheel", function(e) {
    box.style.background = "orange";
    console.log("orange");
})



document.addEventListener("keydown", function (e) {
    box.style.background = keycode;
})