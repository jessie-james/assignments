// const name = "John"
// const age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//              let petname = "fluffy"
//         } else {
//             let petname = "spot"
//         }
//         pet.name = petname
//         petObjects.push(pet)
//     }
//     return petname
// }

// runForLoop()

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function (carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }


// var input = "mnjhg";

// try {
//     if (input === "") {
//         throw "Input can not be empty";
//     } else if (input.length > 5) {
//         throw "Input is to big";
//     } else {
//         console.log("You code runs fine!");
//     }
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log("Runs no matter what");
//     console.log("And the input was " + input);
// }

let x = 6
let y = 4
function sum(x, y) {
    return x + y;
}

try {
    if (typeof x != 'number') {
        throw "x must a number";
    } else if (typeof y != 'number') {
        throw "y must be Numbers";
    }else {

        console.log('code is working')
    }
} catch (err) {
    console.log(err);
}
