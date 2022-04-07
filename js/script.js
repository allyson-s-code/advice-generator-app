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

//SVG update with larger media
const mobileHrDivider = document.querySelector(".mobile-pattern-divider");
const desktopHrDivider = document.querySelector(".desktop-pattern-divider");

//const desktopUpdate = window.matchMedia("(min-width: 1000px)");
//desktopUpdate.addEventListener("change", function () {
//mobileHrDivider.classList.add(".hide");
//desktopHrDivider.classList.remove(".hide");
//});

const mq = window.matchMedia("(min-width: 1000px)");

function widthChange() {
  if (mq.matches) {
    mobileHrDivider.classList.add(".hide");
    desktopHrDivider.classList.remove(".hide");
  } else {
    mobileHrDivider.classList.remove(".hide");
    desktopHrDivider.classList.add(".hide");
  }
}
widthChange();

if (matchMedia) {
  mq.addEventListener("change", function () {
    widthChange();
  });
}

//function widthChange(mq) {
//if (mq.matches) {
//mobileHrDivider.classList.add(".hide");
//desktopHrDivider.classList.remove(".hide");
//} else {
// mobileHrDivider.classList.remove(".hide");
//desktopHrDivider.classList.add(".hide");
//}
//}

////widthChange(mq);
//matchMedia();
