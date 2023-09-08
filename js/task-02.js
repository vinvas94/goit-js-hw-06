const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");
const listIngredients = ingredients.map((ingredient) => {
  const listIngredient = document.createElement("li");
  listIngredient.classList.add("item");
  listIngredient.textContent = ingredient;
  return listIngredient;
});
list.append(...listIngredients);

// const list = document.querySelector("ul#ingredients");
// const markup = ingredients
//   .map((text) => `<li class="item">${text}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
