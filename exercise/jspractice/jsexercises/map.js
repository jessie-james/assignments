// // const array = [2, 5, 100]
// // const doubleNums = array.map(num => {
// //     return num * 2
// // })

// // console.log(doubleNums);

// const array1 = [2, 5, 100]

// const strings = array1.map( num => {
//     return num.toString();
// });
// console.log(strings)

// // const array2 = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// // const capitalizeNames = array2.map(num => {
// //     return  num.charAt(0).toUpperCase() + num.slice(1).toLocaleLowerCase()

// // })

// // console.log(capitalizeNames);

// const array3 = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
// //         name: "Eric Jones",
// //         age: 2
// //     },
// //     {
// //         name: "Paris Hilton",
// //         age: 5
// //     },
// //     {
// //         name: "Kayne West",
// //         age: 16
// //     },
// //     {
// //         name: "Bob Ziroll",
// //         age: 100
// //     }
// // ]
// // // const namesOnly = array3.map(names => {
// // //     return names.name
// // // })

// // // console.log(namesOnly)

// // // const canGo = array3.map(arr => {
// // //      if (arr.age > 18) {
// // //         console.log(`${arr.name} can go`)
// // //     } else {
// // //         console.log(`${arr.name} can not go`)
// // //     }
// // // })

// // const array4 = [1, 2, 3]
// // const total = array4.reduce( (a, b) => {
// //     return a + b
// // }

// // )
// // console.log(total)

// // const concating = array4.join('')

// // console.log(concating)

// //     // your code here

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false }
// ];
// const votes = voters.map(votees => {
//   return votees.voted;
// });
// // console.log(votes)

// // const totalVotes = voters.reduce((pram1, pram2) => {
// //     if (pram2.voted === true) {
// //         pram1.voted ++ 1
// //         console.log(pram2.voted);

// //     } else {
// //         console.log(`fired`)
// //     }
// // });

// const totalVotes = votes.reduce((accumulator, currentValue) => {
//   console.log(accumulator);
//   if (currentValue === true) {
//     return (accumulator += 1);
    
//   } else {
//     return accumulator;
//   }
// }, 0);

// // console.log(totalVotes);

// // var wishlist = [
// //     { title: "Tesla Model S", price: 90000 },
// //     { title: "4 carat diamond ring", price: 45000 },
// //     { title: "Fancy hacky Sack", price: 5 },
// //     { title: "Gold fidgit spinner", price: 2000 },
// //     { title: "A second Tesla Model S", price: 90000 }
// // ];

// // const prices = wishlist.map(nums => {
// //     return nums.price
// // })

// // const shoppingSpree = prices.reduce((a,b) => {
// //     return a + b 
   
// // })

// // console.log(shoppingSpree)


// // const arrayArr = [
// //     ["1", "2", "3"],
// //     [true],
// //     [4, 5, 6]
// // ];
// // const theArray = arrayArr.reduce((a, b) => {
// //     return a + b
// // })

// var voters = [
//     { name: 'Bob', age: 30, voted: true },
//     { name: 'Jake', age: 32, voted: true },
//     { name: 'Kate', age: 25, voted: false },
//     { name: 'Sam', age: 20, voted: false },
//     { name: 'Phil', age: 21, voted: true },
//     { name: 'Ed', age: 55, voted: true },
//     { name: 'Tami', age: 54, voted: true },
//     { name: 'Mary', age: 31, voted: false },
//     { name: 'Becky', age: 43, voted: false },
//     { name: 'Joey', age: 41, voted: true },
//     { name: 'Jeff', age: 30, voted: true },
//     { name: 'Zack', age: 19, voted: false }
// ];

// let youngvoters = []
// let middlevoter = []
// let oldvoter =[]
// const votersager = voters.map(voter => {
//     if (voter.age < 26) {
//         youngvoters.push(voter.name)   
//     } else if (voter.age > 26 && voters.age < 36) {
//         middlevoter.push(voter.name)
//     } else {
//         oldvoter.push(voter.name)
//     }
        
// })
// console.log( youngvoters)
//     // your code here

const scores = [1, 3, 5, 2, 90, 20] 
    const leastToGreatest = scores.sort((a, b) => {
        return a - b
    })


console.log(leastToGreatest)



const greatestoLeast = scores.sort((a, b) => {
    return a + b
})


console.log(greatestoLeast)
