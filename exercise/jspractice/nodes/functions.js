// const sayingHello = () => {
//     return console.log('hello world how are you doing')
// }
// module.exports = {
//      sayingHello
// }

// function sunshine() {
//     return console.log(2 + 3)  
// }
// module.exports = sunshine; 


// module.exports.myArry = function () {
//     return console.log([ 1,2,3,4,5,6,7])
// }


function todos() {
    this.water = "you need to drink water";
    this.workOut = function () {
        console.log(this.water);
    }
}

module.exports = todos;
