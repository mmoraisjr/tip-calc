const inputPrice = document.querySelector(".total-price");
const inputTip = document.querySelectorAll(".value-tip");
const inputPeople = document.querySelector(".people");
const btnImprimir = document.querySelector(".imprimir");
const btnTip = document.querySelector(".value-tip");

var price;
var tip;
var people;

btnImprimir.addEventListener("click", () => imprimir());

const imprimir = () => {
  price = inputPrice.value;
  people = inputPeople.value;
  console.log(price);
  console.log(people);
  console.log(tip);
  console.log(inputTip.value);
  console.log(inputTip);
};

for(let i = 0; i < inputTip.length; i++){
        function catchTip() {
        var x = document.querySelector(`.tip${i}`).value;
        console.log(x);
        document.getElementById("demo").innerHTML = x;
    }
}

btnTip.addEventListener("click", () => valueTip());

const valueTip = () => {
  tip = inputTip.value;
  console.log(tip);
};
