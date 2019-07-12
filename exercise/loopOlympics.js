// // Prelims
// //for (i = 0; i < 10; i++){
// //     console.log(i)
// // }

// // for (i = 9; i >= 0; i--) {
// //     console.log(i)
// // }


// // var fruit = ["banana", "orange", "apple", "kiwi"]
// // for (i = 0; i < fruit.length; i++){
// //     console.log(fruit[i])

// // }
// // var nums = [];
// // for (i = 0; i < 10; i++) {
// //     nums.push(i);

// // }
// // console.log(nums)

// // for (i = 0; i < 10; i++) {
// //     if (i%2 === 0) {
// //         console.log(i)
// //     }
// // }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var specificFruit = []
// for (i = 0; i < fruit.length; i++) {
//     fruit.push()
// }

// //Silver
// var peopleArray = [
//     {
//         name: "Harrison Ford",
//         occupation: "Actor"
//     },
//     {
//         name: "Justin Bieber",
//         occupation: "Singer"
//     },
//     {
//         name: "Vladimir Putin",
//         occupation: "Politician"
//     },
//     {
//         name: "Oprah",
//         occupation: "Entertainer"
//     }
// ]
// for (i = 0; i < peopleArray.length; i++) {
//     console.log (peopleArray[i].name)
// }
// const names = []
// const occupations =[]
// for (i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)

// }
// const names2 = []
// const occupations2 = []
// for (i = 0; i < peopleArray.length; i++) {
//     if(peopleArray[i] % 2 === 0) {
//         names2.push(peopleArray[i].name)
//     } else if (peopleArray[i].occupation % 2 !== 0) {
//         occupations2.push(peopleArray[i].occupation)
//     }
//     else {
//         return console.log("fired")
//     }
// }

// console.log(names2)
// console.log(occupations2)

//Gold
const square= []
for (i = 0; i < 4; i++) {
square.push([])
    for (j = 0; j < 4; j++){
        square[i].push(0)



    }
}

const square1 = []
for (i = 0; i < 4; i++) {
    square1.push([])
    for (j = 0; j < 4; j++) {
        square1[i].push(i)



    }
}
const square2 = []
for (i = 0; i < 4; i++) {
    square2.push([])
    for (j = 0; j < 4; j++) {
        square2[i].push(j)



    }
}
const square3 = []
for (i = 0; i < 4; i++) {
    square3.push([])
    for (j = 0; j < 4; j++) {
        square3[i].push("x")



    }
}
console.log(square)
console.log(square1)
console.log(square2)
console.log(square3)
