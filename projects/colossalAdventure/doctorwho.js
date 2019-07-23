//
const readline = require("readline-sync");
const { question, keyInYN, keyInSelect, prompt } = readline;
//////////set Variables///////
let options = ["run", "attack"];
const alive = true;
const youWon = false;

/////////set functions//////
function Person(username, currentlife = 10,attack, arr) {
    this.username = username;
    this.life = currentlife;
    this.attack = attack;
    this.awards = [arr];
    this.print = function () {
        console.log(`${this.userame} you currently have${this.life}and have been awareded ${this.awards}`)
    }
}

function Enemy(enemyname, currentlife = 10, attack) {
    this.name = enemyname;
    this.life = currentlife;
    this.attack = attack
}




////startgame///////
