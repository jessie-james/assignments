
//Weeping Angels
//Silents
//Kahler cyborg
//river song

//hideEchoBack: true // The typed text on screen is hidden by `*` (default).


// readlineSync.setDefaultOptions({ limit: ['green', 'yellow', 'red'] });

// direction = readlineSync.keyIn('Left or Right? ', { limit: 'lr' }); // 'l' or 'r'
// dice = readlineSync.keyIn('Roll the dice, What will the result be? ',
//     { limit: '$<1-6>' }); // range of '1' to '6'


// grasp on using functions, loops, and conditionals 

// Project Requirements:
// Console must greet player with a fun message
// Console must ask for the player's name and store it
// Walking:
//     The console will ask the user to enter a "w" to walk
// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared(A 1 / 3 or 1 / 4 chance of being attacked)
// If a wild enemy appears:
// The enemy is random(can be chosen out of a minimum of 3 different enemy names)
// The user can decide to attack or run
// If attacking, you will choose a random attack power between a min and max
// If running, you will choose a random number between 1 and 2 - meaning a 50 % chance of escaping
// After the player attacks or runs the enemy attacks back for a random damage amount
// If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// If the enemy kills the player the console prints an cool death message and the game ends
// Inventory
// When the player kills enemies, they are awarded with items
// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory



const readline = require("readline-sync");
const { question, keyInYN, keyInSelect, prompt } = readline;

let options = ["run", "attack"];

function randomEnemy () {
    const enemymin = 1;
    const enemymax = 4;
    const enemySelected = Math.floor(Math.random() * (+enemymax - +enemymin)) + +enemymin;
    return enemySelected;
}

function chanceOfEscape(){
    const escapemin = 1;
    const escapemax = 2;
    const escapeLikelyhood = Math.floor(Math.random() * (+escapemax - +escapemin)) + +escapemin;
    return escapeLikelyhood;
}

function attackPower() {
    const powermin = 0;
    const powermax = 1;
    const attakingPower = Math.floor(Math.random() * (+powermax - +powermin)) + +powermin;
    return acttakingPower;
    
}

function lifeForce() {
    const lifemin = 0;
    const lifemax = 10;
    const lifetaken = Math.floor(Math.random() * (+lifemax - +lifemin)) + +lifemin;
    const currentLife = Number(currentLife) - Number(lifetaken);
    return currentLife;
}







//Start game//
const userName = question("What is your name? ");
console.log (`Welcome ${userName} to the Tardis! Let's start the game.  `);
const walk = question(`Press "w" to walk around the Tardis.  `);



const walking = (walk) => {
    if (walk === 'w') {
        startgame( );
    } else {
        console.log(`Are you scared? If you don't walk around you will be stuck in this loop forever!`)
        walk = readline.question(`Press "w" to walk around the Tardis.  `)
    }
}
const gameOver = false;

function gameRuning() {
    while (gameover === false) {
        rungame()
    } else {
        console.log("You have died and Epic death by the hands of .... Doctor who would be proud.")
    }


}



       
//             if (randomEnemy === 1) {
//                 console.log("Oh NO! You have run into a Daleks.")
//                 const actionTaken = keyInSelect(options, "What would you like to do.");
//                 switch (actionTaken) {
//                     case 0:
                     
//                             if (escapeLikelyhood === true;) {
//                                 console.log("You escaped! Lets keep exploring");
//                                 walk= question(`Press "w" to  continute walking around the Tardis.  `);
//                             } else {
//                                 console.log("Shoot DEADEND! your trapped!");
                                
//                             }
                            
                            
//                     //     complete = true;
//                     //     break;
//                     // case 1:
//                     //     if (!foundKey) {
//                     //         foundKey = true;
//                     //         console.log(“You found a key behind a brick in the wall!“);
//                     //     } else {
//                     //         console.log(“You already have a key.“);
//                     //     }


                
//             } else if (randomEnemy === 2) {
//                 console.log("Oh NO! You have run into a Weeping Angels.")
//                 const actionTaken = keyInSelect(options, "What would you like to do.");
                
//             } else {
//                 //randonEnemy === 3
//                 console.log("Oh NO! You have run into a Kahler cyborg.")
//                 const actionTaken = keyInSelect(options, "What would you like to do.");

//             }
//         }





//             if (dalek === 'a') {
//                 const attackMin = 1;
//                 const attackMax = 5;
//                 const attackNum = Math.floor(Math.random() * (+attackMax - +attackMin)) + +attackMin; 
//                 console.log(" you attacked at the power of" + attackNum) 
//             }
//         }
//     }
// }



const walking = (walk) => {
    if(walk === 'w') {
        startgame();
    } else {
        console.log(`Are you scared? If you don't walk around you will be stuck in this loop forever!`)
        walk = readline.question(`Press "w" to walk around the Tardis.  `)
    }
}

walking(walk);