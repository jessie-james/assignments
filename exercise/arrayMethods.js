var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
// console.log(vegetables)

fruit.shift()
// console.log(fruit)

fruit.indexOf("orange")

// console.log(fruit)

fruit.push(fruit.indexOf("orange"))
// console.log(fruit)

vegetables.length
// console.log(vegetables)

vegetables.push(vegetables.length)
// console.log(vegetables)


const food = fruit.concat(vegetables)
// console.log(food)


food.splice(4, 2)
// console.log(food)

food.reverse()
// console.log(food)


console.log(food.join())

