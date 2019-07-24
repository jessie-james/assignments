//
const readline = require("readline-sync");
const { question, keyInYN, keyInSelect, prompt, keyIn } = readline;
//////////set Variables///////
let alive = true;
let youWon = false;
let dalek = new Enemy("Darlek", 10, 20,"Sonic Screw Driver");
let silent = new Enemy("Silents", 5, 25, "Tally Marks");
let weepingAngels = new Enemy("Weeping Angles", 40, 4, "mirror")
const enemies = [dalek, silent, weepingAngels]

/////////set functions//////
function Person(username, currentlife = 10, attack, arr) {
    this.username = username;
    this.life = currentlife;
    this.attack = attack;
    this.awards = arr;
    this.print = function () {
        console.log(`${this.userame} you currently have${this.life}and have the following tokens ${this.awards}`)
    }
}

function Enemy(enemyname, currentlife = 10, attack, token) {
    this.name = enemyname;
    this.life = currentlife;
    this.attack = attack;
    this.token = token;
}

/////Main Game Functions//////
function exploration() {
    let random = Math.floor(Math.random() * 3)
    if (random === 0) {
        console.log("You know...the Tardis is alot bigger on the inside.We could be exploring for a while...")
    } else if (random === 1) {
        const searchforRiver = keyInYN(`I heard River Song was around here some where. Should we go try to find her?`)
        if (searchforRiver === true) {
            findRiver()
        } else {
            console.log(`Okay we can just keep looking around. That is fun too!`)
        }
    } else {
        encounter();
    }
}

function findRiver() {
    console.log(`What about this door?`)
    const leaveTardisQuestions = keyInYN(`Looks like this is a door to the outside. Should we leave to find River?`)
    if (leaveTardisQuestions === true) {
        console.log(`What planet is this.... What time period are we  in... Maybe we should go back`)
        returnTheTardis = keyInYN(`Should we go back inside?`)
        if (returnTheTardis === true) {
            reEnterTardis()
        } else {
            console.log(`Are you sure? The Tadis could leave any second.... And there is goes I guess we are Stuck here`)
            alive = false;
        }

    }

}

function reEnterTardis(){
    let retunToTardis = Math.floor(Math.random() * 3)
    if (retunToTardis > 2) {
        console.log('That was a close one. I Think i felt the Tardis disappearing.')
    } else if (retunToTardis === 0) {
        console.log('Oh No!! The Tardis is gone. I think we are traped.... Wait who is that in the distance?')
        const chase = keyInYN(`do you want to find out who that is?`)
        if (chase === true) {
            console.log("We found RIVER. CONGRATULATIONS YOU HAVE WON THE GAME.")
            player1.awards.push("Soncic Screw Driver")
            youWon = true;
        }
        else {
            console.log("guess it was no one.... You are definatly trapped.")
            alive = false;
        }
    }else{
        console.log('Oh No!! The Tardis is gone. I think we are traped')
        alive = false;
        
        }
    }

function findRiver() {
    console.log(`What about this door?`)
    const leaveTardisQuestions = keyInYN(`Looks like this is a door to the outside. Should we leave to find River?`)
    if (leaveTardisQuestions === true) {
        console.log(`What planet is this.... What time period are we  in... Maybe we should go back`)
        returnTheTardis = keyInYN(`Should we go back inside?`)
        if (returnTheTardis === true) {
            reEnterTardis()
        } else {
            console.log(`Are you sure? The Tadis could leave any second.... And there is goes I guess we are Stuck here`)
            alive = false;
        }

    }

}

function encounter() {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)]
    console.log(`You have encountered ${enemy.name}`)
    let action = keyIn('Would you like to run [r], or attack [a]? ', { limit: 'ra' })
    if (action == `r`) {
        console.log('Okay lets make a run for it')
        chanceOfEscape()
    } else {
        console.log("Attack it is. Lets Do This!")
        attack(enemy)
    }
}



function chanceOfEscape() {
    let escapeLikelyhood = Math.floor(Math.random() * 3)
    if (escapeLikelyhood === 0) {
        console.log(`That was Luckly we got away! Guess its time to keep looking For River!`)
    } else {
        console.log(`Your trapped. I guess you Have to fight it anyway! GOOD LUCK!`)
        attack(enemy);
    }
}

function attack(enemy) {
    while (player1.life > 0 && enemy.life > 0) {
        let enemyPower = attackPower(enemy)
        let playerPower = attackPower(player1)
        player1.life -= enemyPower;
        enemy.life -= playerPower;
        console.log(`You currently have${player1.life} ${enemy.name} currently  has ${enemy.life}`)
    } if (player1.life === 0) {
        if (enemy.name === "Weeping Angles") {
            console.log(`do you want the good news or the bad news first?? Good news. Your not dead. Bad news you blinked! guess you will live the Rest of you years int eh 1600's`)
            alive = false;
        } else {
            console.log(`you died`)
            alive = false;
        }
    } else {
        enemyDefeat(enemy)
    
    }

}

function attackPower(character) {
        return Math.floor(Math.random() * character.attack)
}
function enemyDefeat(character) {
    console.log(`You have Defeated ${character.name}. Please collect ${character.token}`)
    player1.awards.push(character.token)
    console.log(`${player1.print()}`)
    enemies.splice(enemies.indexOf(character), 1)
    if (enemies.length === 0) {
        console.log('You won the game')
        youWon = true
    }
    player1.awards.push(character.token)
    console.log(`${player1.print()}`)
}








////startgame///////


const userName = question("What is your name? ");
let player1 = new Person(userName, 10, 10, []);
console.log(`Welcome ${userName} to the Tardis! Let's start the game.  `);



while (alive && !youWon) {
    const walk = question(`Press "w" to walk around the Tardis.  `);
    if (walk !== 'w') {
        console.log(`Are you scared? If you don't walk around you will be stuck in this loop forever!`)
    } else if (walk === 'w') {
        console.log('Let the exploration begin!')
        exploration();
    }
} if (alive === false) {
    console.log(`You have died!`);
} else if (youWon === true) {
    console.log(`You won`);
}
