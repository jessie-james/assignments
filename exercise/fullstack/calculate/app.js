const addingButton = document.querySelector("#clickAdd");
const addOutPutDisplay = document.getElementById("outPutDisplayAdd");
const addForm = document.querySelector("#adding");

addingButton.addEventListener("click", function(event) {
  event.preventDefault();
  const firstAddNum = addForm.num1.value;
  const secondAddNum = addForm.num2.value;
  const totalA = Number(firstAddNum )+ Number(secondAddNum);
    addOutPutDisplay.innerHTML = totalA;
});

const subtratctionButton = document.querySelector("#clickSub");
const outPutDisplaySub = document.getElementById("outPutDisplaySub");
const subForm = document.sub;

subtratctionButton.addEventListener("click", function(event) {
    event.preventDefault();
    const firstNum = subForm.snum1.value;
    const secondNum = subForm.snum2.value;
    const totalA = Number(firstNum) - Number(secondNum);
    outPutDisplaySub.innerHTML = totalA;
});

const multiplyButton = document.querySelector("#clickMul");
const outPutDisplayMul = document.getElementById("outPutDisplayMul");
const mulForm = document.multi;

multiplyButton.addEventListener("click", function (event) {
    event.preventDefault();
    const firstNum = mulForm.num1.value;
    const secondNum = mulForm.num2.value;
    const totalA = Number(firstNum) * Number(secondNum);
    outPutDisplaySub.innerHTML = totalA;
});


