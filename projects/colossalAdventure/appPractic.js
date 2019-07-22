const readline = require("readline-sync");
const username = readline.question("What is your name? ");
console.log(`Welcome ${username} to the Tardis!`);
readline.question(`Press any key to contintue and start the game.  `);
readline.question(`Press "w" to walk around the Tardis`);























let complete = false;
let foundKey = false;

let options = [“Put hand in hole”, “Find the key”, “Open the door”, “Eat Mana”];

while (!complete)//true) 
{
    const answer = readline.keyInSelect(options, “What do you want to do?“);
    switch (answer) {
        case 0:
            console.log(“The hole was a deadly trap and you died.“);
            // complete = true; to break look
            break;
        case 1:
            if (!foundKey//true) {
                foundKey = true;
                console.log(“You found a key behind a brick in the wall!“);
            } else {
                console.log(“You already have a key.“);
            }
            break;
        case 2:
            if (foundKey) {
                complete = true;
                console.log(“You escaped! Now run you fool! “);
            } else {
                console.log(“The door is locked, dummy.“);
            }
            break;
        case 3:
            console.log(“You are out of Mana.“);
            break;
        default:
            console.log(“You mustn’t give up that easy!“);
            break;
    }
}


