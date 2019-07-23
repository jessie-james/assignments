//1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0
for (i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count++;
    }
}
console.log(count)

//2
var him = "he";

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {// 1
        name: "Mike",
        age: 12,
        gender: "male"
    }, {//2
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {//3
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {//4
        name: "Sam",
        age: 30,
        gender: "male"
    }, {//5
        name: "Suzy",
        age: 4,
        gender: "female"
    }
] 


for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender != "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Old enough" + him + "good to see the movie")
    
    } else if (
        peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Old enough" + "She's good to see the movie")
    }
        
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
    }
}

// BOUNS:

// Imagine you have a button that toggles a light on and off.Loop through the following array of numbers and toggle the button the numbers of times for each number.The array[2, 3, 2] would toggle the button 7 times.

// The light is off to start with.Log to the console whether or not the light is on at the end.



// arry[1, { a.b.c.}

//     2, 3, 4, 5,]