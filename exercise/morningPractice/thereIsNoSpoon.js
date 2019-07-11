var coffee = {
    temp: 90,
    noSugar: true,
    addCream: "yes",
    makeCoffee: function (howhot, cream) {
        console.log( "I would like a coffee at" + this.temp + "cream you say??" + this.addCream )
    }

}

coffee.makeCoffee(coffee.temp, coffee.addCream);

var lunchsack = [];

var backpack = {
    zipers: 6 ,
    frontPocket:["laptop", "headphones", "wallet", "lunch"],
    color: "Black",
    packBackPack: function (lunchsack) {
        for (i = 0; i < backpack.frontPocket.length; i++) {
            if (backpack.frontPocket[i].startsWith("lunch")){
                lunchsack++;
            }
        }
    }
}
 
console.log(lunchsack)

var wallet = {
    haveID: true,
    cards: ["creditCards", "busPass", "insurance"],
    material: "hairelastics",
    countCards: function (numCards) {
        for (i = 0; i < this.cards.length; i++) {
            console.log(i)
        }
    }
}
wallet.countCards(wallet.cards);


var people = {
    number: 12,
    names: ["lynn", "Evan", "Johnathan", "Rand"],
    ageAndNames: function (pram1, pram2) {
        console.log(this.number + this.name)
    }
}
people.ageAndNames(people.number, people.names);


// var chair {

// }

// var table {

// }
// var tShirts{

// }
// var shoes {

// }
// var computer {

// }
