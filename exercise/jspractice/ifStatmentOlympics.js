// Preliminaries
if (5 > 3) {
    console.log("is greater than")
}
var animal1 = "cat";

if (animal1.length === 3) {
    console.log("is the lenght")
}
var animal2 = "dog";

if (animal1 === animal2) {
    console.log("they are the Same");
}
else {
    console.log("not the same")
}

//Bronze

var person = {
    name: "Bobby",
    age: 12
}


if (person.age >= 18) {
    console.log(person.name +" is allowed to go to the movie")
}
else {
    console.log(person.name + " is NOT allowed to go to the movie")
}

if (person.name.startsWith("B")) {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log(person.name + " is NOT allowed to go to the movie")
}

if (person.name.startsWith("B") && person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log(person.name + " is NOT allowed to go to the movie.")
}

// Silver 

if (1 === "1") {
    console.log ("strict")
}
else if (1 == "1") {
    console.log("loose")
}
else {
    console.log ("not equal at all")
}

if (1 <= 2 && 2 === 4) {
    console.log ("Yes")
}

//Gold
if (typeof "dog" === "string" ) {
    console.log("True")
}

if (typeof true === "boolean") {
    console.log("True")

}else {
    console.log("fired")
}


var undeclaredVariable
if (typeof undeclaredVariable === 'undefined') {
    console.log("True")
} else {
    console.log("fired")
}

if ("s" < 12) {
    console.log("True")
}
else {
    console.log("fired")
}

var myNum = 9;
myNum % 2 == 0 ? console.log("Even") : console.log("Odd");

