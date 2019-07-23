
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
const gameOver = true;

function Person(username, currentlife =10, arr, print()) {
    this.username = username;
    this.life = currentlife;
    this.awards = [arr];
    this.print = function () { console.log(this.userame + "  you currently have" +this.life + " and have been awareded " +  this.awards }
}
function Enemy(enemyName, currentlife, attackPower) {
    this.enemyName = enemyName;
    this.life = currentlife;
    this.attackPower =attackPower;
}

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

function userattackPower() {
    const powermin = 0;
    const powermax = 1;
    const attakingPower = Math.floor(Math.random() * (+powermax - +powermin)) + +powermin;
    return attakingPower;
    
}

function lifeForce(currentlife) {
    const lifemin = 0;
    const lifemax = 10;
    const lifetaken = Math.floor(Math.random() * (+lifemax - +lifemin)) + +lifemin;
    return currentlife -= lifetaken;
}


function takeAction() {
    const actionTaken = keyInSelect(options, "What would you like to do.")
    if (actionTaken === 0) {
        chanceOfEscape()
        if (escapeLikelyhood === 0) {
            console.log("Shoot DEADEND! your trapped! You must attack")
            userattackPower();
            //darlk power
            //darlek life
            //userlife
            // consle.log escape and. 
        } else {
            console.log("You escaped! Lets keep exploring")
        }
    } else {
        console.log('alright!  You got this')
        userattackPower()
        //darlk power
            //darlek life
            //userlife
            // consle.log escape and. 
    }
}
 
function maingame() {
    while (!gamveover) {
        randomEnemy();
        switch (enemySelected) {
            case 0:
                console.log("Oh NO! You have run into a Daleks.")
                takeAction()
                break; 
            case 1:
                console.log("Oh NO! You have run into the Kahler Cyborg.")
                takeAction()
            case 2:
                console.log("Oh NO! You have run into a Weeping Angles. Close your EYES our you will die Instantly!")
                takeAction()
            case 3: console.log("Oh NO! You have run into the Silents")
                takeAction()

        
    } else {
        console.log(`${username}, you have have died an Epic death!Doctor who would be proud. During your life you gained ${awards}. Congratulations!`)
    }
}






//Start game//
const userName = question("What is your name? ");
console.log (`Welcome ${username} to the Tardis! Let's start the game.  `);
const walk = question(`Press "w" to walk around the Tardis.  `);


    while (isalive && !youWon) {
        const walking = (walk) => {
            while (walk !== 'w') {
                console.log(`Are you scared? If you don't walk around you will be stuck in this loop forever!`)
                walk = readline.question(`Press "w" to walk around the Tardis.  `)
            }
}

    else {
    maingame();
    }
}









walking(walk);