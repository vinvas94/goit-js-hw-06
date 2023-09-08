const list = document.querySelector("#categories");
const allElements = list.children.length;
console.log(`"Number of categories:" ${allElements}`);

const arrList = [...list.children];

arrList.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  const elementsList = element.querySelectorAll("li").length;
  console.log(`Category:${categoryName}`);
  console.log(`Elements:${elementsList}`);
});
