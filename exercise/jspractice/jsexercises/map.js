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

// // var voters = [
// //     { name: 'Bob', age: 30, voted: true },
// //     { name: 'Jake', age: 32, voted: true },
// //     { name: 'Kate', age: 25, voted: false },
// //     { name: 'Sam', age: 20, voted: false },
// //     { name: 'Phil', age: 21, voted: true },
// //     { name: 'Ed', age: 55, voted: true },
// //     { name: 'Tami', age: 54, voted: true },
// //     { name: 'Mary', age: 31, voted: false },
// //     { name: 'Becky', age: 43, voted: false },
// //     { name: 'Joey', age: 41, voted: true },
// //     { name: 'Jeff', age: 30, voted: true },
// //     { name: 'Zack', age: 19, voted: false }
// // ];

// // let youngvoters = []
// // let middlevoter = []
// // let oldvoter =[]
// // const votersager = voters.map(voter => {
// //     if (voter.age < 26) {
// //         youngvoters.push(voter.name)   
// //     } else if (voter.age > 26 && voters.age < 36) {
// //         middlevoter.push(voter.name)
// //     } else {
// //         oldvoter.push(voter.name)
// //     }
        
// // })
// // // console.log( youngvoters)
// // //     // your code here

// // const scores = [1, 3, 5, 2, 90, 20] 
// //     const leastToGreatest = scores.sort((a, b) => {
// //         return a - b
// //     })


// // console.log(leastToGreatest)



// // const greatestoLeast = scores.sort((a, b) => {
// //     return a + b
// // })


// // console.log(greatestoLeast)

// // function collectAnimals(...nums) {
    
// //     console.log(nums)
// //     return nums
// // }
// // collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

// // function combineFruit(fruit, sweets, vegetables) {
// //     // console.log(nums)
// //     const props = {fruit, sweets, vegetables}
// //     console.log(props)
// //     return props
// // }

// // combineFruit(["apple", "pear"],
// //     ["cake", "pie"],
// //     ["carrit"])



// // const vacation = {
// //     location: "Burly Idaho",
// //     duration: "2 weeks"
// // };

// // function parseSentence() {
// //     const { location, duration } = vacation; 
// //     console.log(`We're going to have a good time in ${location} for ${duration}`)
// //     return `We're going to have a good time in ${location} for ${duration}`
// // }
// // parseSentence()
 
// // function returnFirst(items) {
// //     const [firstItem ]= items ; /*change this line to be es6*/
// //     return firstItem
// // }
// // returnFirst()

// // const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// // function returnFavorites(arr) {
// //     const [one, two ,three, four, five ] = arr
// //     return console.log(`My top three favorite activities are, ${one}, ${three}, and ${five}`)

// // }

// // returnFavorites(favoriteActivities)

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// function combineAnimals() {

// }
// function destruction(arr) {
//     const [one, two three] = arr
    
// }

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// var numbers = [a, b, c, d, e];



// const product = numbers.reduce((acc, number) => {
//     return acc * number;

// // })
// const name = "John"
// const age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             let name = "fluffy"
//         } else {
//             let name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// runForLoop()

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map((carrot) => {
//         console.log(`fired`)
//         return { type: "carrot", name: carrot }
//     })
//     }

// mapVegetables(carrots)

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => {
//         return person.friendly
//     })
// }

// doMathSum = (a, b) => {
//     return a + b
// }

// produceProduct = (a, b)=> {
//     return a * b
// }

// printString = (firstName = `Jane`, lastName =`Doe`, age = 100) => {
//     return (`Hi ${firstName} ${lastName}, How does it feel to be ${age}?`)
// } 


// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];

// filterForDogs = (arr) => {
//     return arr.filter((animal) => {
//       animal.type === "dog" ?true : false
//     })
// }

// const vacation = ((location, name) => {
//     console.log(`
//     Hi ${name},\n
//     Welcome to ${location}, \n
//    I hope you enjoy your stay.Please ask the president of${location} if you need anything`)
// })
// fiveAndGreaterOnly = (arr) => {
//     const fiveGreat = arr.filter((number) => {
//         return number >= 5;
//     })
    
//     // your code here
// }
// // // test
// fiveAndGreaterOnly = (arr) => {
//     return arr.filter((number) => {
//         return number >= 5
//     })

// }
// // test
// const newArr = fiveAndGreaterOnly([3, 6, 8, 2])
// const newNewArray = fiveAndGreaterOnly([3, 5, 8, 3])
// console.log(newArr, newNewArray)

// evensOnly = (arr) => {
//     return arr.filter((number) =>{ 
//          return number %2 == 0
//      })
  
// }

// console.log(evensOnly([3, 6, 8, 2])); 

// fiveCharactersOrFewerOnly = (arr) => {
//     return arr.filter((str) => {
//         return str.length <= 5

//     })
//     // your code here
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


// peopleWhoBelongToTheIlluminati = (arr) => {
//     return arr.filter((obj) => {
//         return obj.member === false
//     })
//     // your code here
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ]));

// ofAge = (arr) => {
//     return arr.filter((obj) => {
//         return obj.age > 18
//     })
//     // your code here
// }
// // test
// console.log(ofAge([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

const users = [
    {
        firstName: "Billy",
        lastName: "Madison",
        age: 32
    },

    {
        firstName: "Tommy",
        lastName: "Pickles",
        age: 32
    },

    {
        firstName: "Ray",
        lastName: "Charles",
        age: 32
    },

    {
        firstName: "Lady",
        lastName: "Gaga",
        age: 32
    },

    {
        firstName: "Elizabeth",
        lastName: "Taylor",
        age: 32
    },

    {
        firstName: "Led",
        lastName: "Zeplin",
        age: 32
    },
    {
        firstName: "Micael",
        lastName: "Johnson",
        age: 32
    },
    {
        firstName: "Keri",
        lastName: "Strug",
        age: 32
    },
    {
        firstName: "Chucky",
        lastName: "Finster",
        age: 32
    },
    {
        firstName: "Angelica",
        lastName: "Pickles",
        age: 32
    },
]

alphabetSort = (userArray, sortAscending) => {
    return userArray.sort((lastname) => {
        return lastname.lastname 
    })
}