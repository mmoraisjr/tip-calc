const inputPrice = document.querySelector(".total-price");
const inputPeople = document.querySelector(".people");
const inputTip = document.querySelector(".tip");
const btn = document.querySelector(".imprimir");
const exibe = document.querySelector("#demo");

var price;
var tip;
var people;
var total;
var totalPerPerson;

btn.addEventListener("click", () => inputs());

const inputs = () => {
  price = inputPrice.value;
  people = inputPeople.value;
  tip = inputTip.value;

  calcTip(price, people, tip);
};

function calcTip(price, people, tip) {
  total = parseInt(price) + ((parseInt(price) * parseInt(tip)) / 100);
  totalPerPerson = parseInt(total) / parseInt(people);
  console.log("Valor: " + price);
  console.log("Porcentagem de gorjeta: " + tip + "%");
  console.log("Valor Total: " + total);
  console.log("Valor Total por Pessoa: " + totalPerPerson);
  
}
