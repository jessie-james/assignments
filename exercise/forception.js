

let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

let alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet) {
    let newArray = [];
    for (i = 0; i < people.length; i++) {
        newArray.push(people[i])
        for (j = 0; j < alphabet.length; j++) {
            newArray.push(alphabet[j])
        }
      
    }
    console.log(newArray)
}   

forception(people, alphabet);
