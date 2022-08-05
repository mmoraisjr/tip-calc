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
};

for (let i = 0; i < inputTip.length; i++) {
  const btn = inputTip[i];
  const obtemClass = btn.classList[1];
  const btnValue1 = obtemClass;
  const btnValue2 = btn.value;
//   var x = document.querySelector(`.tip${i}`).value;
//   console.log(x);
console.log(btn);
console.log(obtemClass);
console.log(btnValue1);
console.log(btnValue2);
btn.onClick = function () {
    console.log(btnValue2);
  }
}