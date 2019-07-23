// move your mouse in the box to see the coordinates of your mouse

let mouse = document.getElementById("red-box");
let output = document.getElementById("output");
mouse.addEventListener("mouseover", function(event){
    let x = event.clientX;
    let y = event.clientY;
    let coor = "X coords: " + x + ", Y coords: " + y;
   output.innerHTML = coor;
}
)


