const refs = {
  input: document.querySelector("input#name-input"),
  span: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value.trim() === ""
    ? (refs.span.textContent = "Anonymous")
    : (refs.span.textContent = event.currentTarget.value);
}


