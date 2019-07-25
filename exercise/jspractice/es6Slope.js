const name = "John"
const age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if (pets[i] === "cat") {
             let petname = "fluffy"
        } else {
            let petname = "spot"
        }
        pet.name = petname
        petObjects.push(pet)
    }
    return petname
}

runForLoop()

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function (carrot) {
        return { type: "carrot", name: carrot }
    })
}