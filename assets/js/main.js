const inputPrice = document.querySelector(".total-price");
const inputPeople = document.querySelector(".people");
const btnCalc = document.querySelector(".calc");
const btnLimpar = document.querySelector(".limpar");
const showTotal = document.querySelector(".total");
const showTotalPerPerson = document.querySelector(".total-per-person");
const inputTip = document.querySelectorAll(".tip");

var price;
var tip;
var people;
var total;
var totalPerPerson;

inputTip.forEach((element) => {
  element.addEventListener("click", (e) => {
    tip = e.target.value;
    clearButtonTip();
    e.target.classList.replace("tip","selected");

  });
});

btnCalc.addEventListener("click", () => inputs());
btnLimpar.addEventListener("click", () => clearFields());

const inputs = () => {
  price = inputPrice.value;
  people = inputPeople.value;
  ok = btnCalc.value;

  calcTip(price, people, tip);

  showTotal.innerHTML = total.toFixed(2);
  showTotalPerPerson.innerHTML = totalPerPerson.toFixed(2);
};

const clearFields = () => {
  clearButtonTip();
  inputPrice.value = "";
  inputPeople.value = "";
  showTotal.innerHTML = "--";
  showTotalPerPerson.innerHTML = "--";

};

const clearButtonTip = () => {
  inputTip.forEach((element) => {
    
    if (element.className = "tip"){
      element.className.replace("tip","selected")
    }
  })
}



function calcTip(price, people, tip) {
  total = parseInt(price) + (parseInt(price) * parseInt(tip)) / 100;
  totalPerPerson = parseInt(total) / parseInt(people);
}
