

// Each section has two inputs to take the first and second numbers
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// Your website will have 3 colors
// Your website will have proper padding/spacing to lay things out nicely

let addnum1 = document.getElementById();
let addnum2 = document.getElementById();
let subnum1 = document.getElementById();
let subnum2 = document.getElementById();
let mulnum1 = document.getElementById();
let mulnum2 = document.getElementById();
let runadd = document.getElementById("clickadd");
let runsub = document.getElementById("clicksub");
let runmul = document.getElementById("clickmul");

runadd.addEventListener("click", function () {
    return addnum1 + addnum2;
})

runsub.addEventListener("click", function () {
    return subnum1 - subnum2;
})

runmul.addEventListener("click", function () {
    return mulnum1 * mulnum2;
})


