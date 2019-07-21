var readlineSync = require("readline-sync")


// readlineSync.question("question ");

let desicion1 = readlineSync.question("You have 3 options please pick one. 1.put hand in hole.  2 Find the key. 3. open the door. what do you choose?? one, two, or three");

function doYouHaveKey(pram1) {
    if (pram1 === "two") {
        let foundkey = readlineSync.question("found key.  put hand in hole(one) or open the door(two)")
        openDoor(foundkey)
    
        } 
    else if (pram1 === "one") {
        let died = readlineSync.question("You died. try again You have 3 options please pick one. 1.put hand in hole.  2 Find the key. 3. open the door. what do you choose?? one, two, or three")
        doYouHaveKey(died)
    }
    else{
        let desicion1 = readlineSync.question("You have 3 options please pick one. 1.put key in hole.  2 Find the key. 3. open the door. what do you choose?? one, two, or three");
        doYouHaveKey(desicion1)
        }
}


function openDoor(pram2) {
    if (pram2 === "two") {
        console.log("You Win")
    } else if (pram2 === "one") {
        let died2 = readlineSync.question("You died. try again You have 3 options please pick one. 1.put hand in hole.  2 Find the key. 3. open the door. what do you choose?? one, two, or three")
        doYouHaveKey(died2)
    } else {
        let desicion1 = readlineSync.question("You have 3 options please pick one. 1.put key in hole.  2 Find the key. 3. open the door. what do you choose?? one, two, or three");
    }
}

 

// function openDoor(pram2) {
    
//     pram2 === "two" ? console.log("You Win") : pram2 === "one" && doYouHaveKey(died)

// }

doYouHaveKey(desicion1)