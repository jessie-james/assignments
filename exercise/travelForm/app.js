let form = document.travelForm;
let submition = document.travelForm.submit

submition.addEventListener("click", function (event) {
    event.preventDefault();
    let firstName = document.travelForm.firstName.value
    let lastName = document.travelForm.lastName.value
    let age = document.travelForm.age.value
    let gender = document.travelForm.gender.value
    let destinations = document.travelForm.destination.value;


    let restric = document.travelForm.restrictions;
    function getRestrictions(restric) {
        let knownRestric = [];
        for (var i = 0; i < restric.length; i++){
            if (restric[i].checked) {
                knownRestric.push(restric[i].value)
            }
        }
        return knownRestric;
    }
    let diet = getRestrictions(restric);
    
    alert("First Name: " + firstName  +
        "\n Last Name: " + lastName +
        "\n Age: " + age +
        "\n Gender: " + gender +
        "\n Location: " + destinations +
        "\n Dietary Restrictions: " +  diet)
})
