//a) Write a function that returns the sum of two numbers.Throw an error if either argument is not of the data type number:
// sum = (x, y) => {
// try {
//     if (sum(x)) {
//         throw "x must be Number";
//     } else if (isNaN(y)) {
//         throw "y must be Number";
//     } else {
//         console.log("You code runs fine!");
//     }
// } catch (err) {
//     console.log(err);
// } finally {
   
//     console.log("And the input was " + x + y);
// }
//     return x + y;
// }
// sum(5, "u")

const sum = (a, b) => {
    return a + b
}

// sum("1", "2");
try {
    if (typeof sum('1', '2') !== 'number') {
        throw 'arguments must be numbers'
    }
} catch(err){
    console.log(err)
}
console.log(sum(3,5))

