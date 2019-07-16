function capilizeAndLowercase(str) {
    return `${str.toLowerCase()} ${str.toUpperCase()}`
}
console.log(capilizeAndLowercase("hello WORlds"))



function halvesies(str) {
    return Math.floor(str.length / 2)
}
console.log(halvesies("dddkdkd"))

function firstHalve(str) {
    return str.slice(0, (str.length / 2))
}
console.log(firstHalve("dhdhhhhddd"))

function capsOdds(str) {
    return `${(str.length / 2).toUpperCase }`
}







// // Make a function that takes a string and returns 
// that string where the first half is capitalized,
//     and the second half is lower cased. 
//     (If the string length is odd, capitalize the shorter of the first half.)

function firstandsecondwithodd(str) {
    let step1 = str.splice(0,str.length / 2)
    firsHlave = step1.toUpperCase()
    let step3 = str.slice(str.length / 2)
    secondHlave = step3.toLowerCase()
    if ((str.length % 2 !== 0)) {
        firstHalve = step1.toLowerCase()
    } 

    return `${firstHalve}${secondHlave}`
}

console.log(firstandsecondwithodd("djdjdjd"))