let form = document.scoreCard;
let submition = document.scoreCard.submit

submition.addEventListener("click", function (event) {
    event.preventDefault();
    let goombas = document.scoreCard.goombasTotalCaught.value;
    let bobombs = document.scoreCard.bobOmbsTotalCaught.value;
    let baddies = document.scoreCard.cheepCheepsTotalCaught.value;
    let totalA = (Number(goombas) * 5 )+ (Number(bobombs) * 7 )+ (Number(baddies)* 11);
    baddieTotalPrice.innerHTML = "Total Score: " + totalA;
})