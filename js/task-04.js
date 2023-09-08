const incrActin = document.querySelector('[data-action="increment"]');
const decrActin = document.querySelector('[data-action="decrement"]');
const valueElement = document.querySelector("#value");
let counterValue = 0;

function updateCounter() {
  valueElement.textContent = counterValue;
}

const firstCallback = () => {
  valueElement.textContent++;
};

incrActin.addEventListener("click", firstCallback);

const secondCallback = () => {
  valueElement.textContent--;
};
decrActin.addEventListener("click", secondCallback);
