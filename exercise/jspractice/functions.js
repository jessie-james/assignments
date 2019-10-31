// function sum(num1, num2) {
//     return num1 + num2
// }

// function largest(num1, num2, num3) {
//     return Math.max(num1, num2, num3)
// }
Array.prototype.mapV2 = function (callBack) {
    const newArray =[]
    for (i = 0; i <= this.length; i++){
        const newNum = callback(this[i])
        newArray.push(newNum)


    }
    return newArray
}

// function evenOdd(num1) {
//     if (num1 % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// function strlength(str) {
//     if (str.length <= 20) {
//         return `${str} ${str}`
//     } else {
//         return str.substr(0, (str.length / 2))
//     }
// }

// function printFirst(n) {
    
// }


