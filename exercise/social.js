const numCount = [];

const slavefootprint = {
    userName:"Jack",
    passWord: "2019Password",
    userID: 2839593,
    footprintData:{
        city: "New York",
        age: 55,
        children:[
            {
                name:"Jane",
                age: 3,
                gender: "female",
                livesAtHome: true,
            },
            {
                name: "Jack",
                age: 25,
                gender: "Male",
                livesAtHome: false,
            },
            {
                name: "",
                age: "",
                gender: "",
                livesAtHome: "",
            }
        ],
        renter: "",
        roomsInHouse: {
            bedrooms: 5,
            bathrooms: 2,
            kitchent:1,
        },
        cars: {
            number: 6,
            buyNew: true,
            make: ["Honda", "Audi", "Subaru", "Lambergine", "BMW", "Tesla"],
        },
        matrialistItems: [
            {
                type:"Jewelry",
                number:10,
                materialMadeOf: ["gold","silver","dimonds","pearls","platnim"],
                numSlaves: function () {
                    console.log(this.number)  
                },
            },
            {
                type: "electronics",
                number: 15,
                materialMadeOf: ["coltan", "iron"],
                numSlaves: function () {
                    console.log(this.number)
                },
            },
            {
                type: "sportinggoods",
                number: 3,
                materialMadeOf: ["fiberglass","aluminum","polyester"],
                numSlaves: function () {
                    console.log(this.number)
                },
            },
        ],
        findFootPrint: function () {
            for (i = 0; i < this.matrialistItems.length; i++) {
                numCount.push(this.matrialistItems[i].number);
            } 
        }
    }
}

slavefootprint.footprintData.findFootPrint();

totalCount = function () {
    return numCount.reduce(function (acc, cV, cI, aV) { 
        return acc + cV
    }, 0)
    }
console.log(`You have ${totalCount()} total slaves`);


