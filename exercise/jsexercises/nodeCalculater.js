var readlineSync = require("readline-sync")


let num1 = readlineSync.question("Please enter your first number ");
let num2 = readlineSync.question("Please enter your  second number ");

let operater = readlineSync.question("Please enter the operation to perform: add, sub, mul, div");

function whatfunction(pram3) {
    if (pram3 === "div") {
        division(num1, num2);
    } else if (pram3 === "sub") {
        subrtraction(num1, num2);
    } else if (pram3 === "add") {
        adding(num1, num2);
    } else if (pram3 === "mul") {
        multiply(num1, num2);
    }
}


function adding(pram1, pram2, ) {
    let sum = Number(pram1) + Number(pram2)
    console.log (`That  is equal to ${sum}`)
}





function multiply(pram1, pram2) {
    let product = Number(pram1) * Number(pram2)
    console.log(`The answer is ${product}`)
}




function division(pram1, pram2) {
    let divide = Number(pram1) / Number(pram2)
    console.log(`The answer is ${divide}`)
}




function subrtraction(pram1, pram2) {
    let subtract = Number(pram1) - Number(pram2)
    console.log(`The answer is ${subtract}`)
}

whatfunction(operater)
