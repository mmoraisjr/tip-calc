const inputPrice = document.querySelector(".total-price");
const inputPeople = document.querySelector(".people");
const btn = document.querySelector(".calc");
const showTotal = document.querySelector(".total");
const showTotalPerPerson = document.querySelector(".total-per-person");
const inputTip = document.querySelectorAll(".tip");

var price;
var tip;
var people;
var total;
var totalPerPerson;

inputTip.forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    tip = e.target.value;
    e.target.classList.add("selected");
    console.log(e.target.value);
  });
});

btn.addEventListener("click", () => inputs());

const inputs = () => {
  price = inputPrice.value;
  people = inputPeople.value;
  ok = btn.value;

  calcTip(price, people, tip);

  showTotal.innerHTML = total;
  showTotalPerPerson.innerHTML = totalPerPerson;
};

function calcTip(price, people, tip) {
  total = parseInt(price) + (parseInt(price) * parseInt(tip)) / 100;
  totalPerPerson = parseInt(total) / parseInt(people);
}
