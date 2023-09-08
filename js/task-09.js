function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector("button.change-color");
const spanEl = document.querySelector("span.color");
const bodyEl = document.querySelector("body");
buttonEl.addEventListener("click", Onclick);

function Onclick(event) {
  const newColor = getRandomHexColor();

  bodyEl.style.backgroundColor = newColor;
}
