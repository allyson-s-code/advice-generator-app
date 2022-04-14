const adviceNumber = document.querySelector(".advice-id");
const randomQuote = document.querySelector(".random-quote");
const button = document.querySelector("#dice-button");

//Fetch API JSON Data
const getData = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  displayAdvice(data);
};

//Display Advice
const displayAdvice = function (data) {
  adviceNumber.innerText = data.slip.id;
  randomQuote.innerText = data.slip.advice;
};

//Event listener for button
button.addEventListener("click", function () {
  getData();
});
