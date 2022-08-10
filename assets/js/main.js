const inputPrice = document.querySelector(".total-price");
const inputPeople = document.querySelector(".people");
const btn = document.querySelector(".imprimir");
// const exibe = document.querySelector("#demo");
const inputTip = document.querySelectorAll(".tip");

var price;
var tip;
var people;
var total;
var totalPerPerson;

inputTip.forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    tip = e.target.value;
  });
});

btn.addEventListener("click", () => inputs());

const inputs = () => {
  price = inputPrice.value;
  people = inputPeople.value;
  ok = btn.value;

  calcTip(price, people, tip);

  // exibe.innerHTML =
  //   "Valor: " +
  //   price +
  //   "<br>Porcentagem de gorjeta: " +
  //   tip +
  //   "%" +
  //   "<br>Pessoas na mesa: " +
  //   people +
  //   "<br>Valor Total: " +
  //   total +
  //   "<br>Valor Total por Pessoa: " +
  //   totalPerPerson;
};

function calcTip(price, people, tip) {
  total = parseInt(price) + (parseInt(price) * parseInt(tip)) / 100;
  totalPerPerson = parseInt(total) / parseInt(people);
}
