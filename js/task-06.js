const onIputBlur = document.querySelector("input");
onIputBlur.addEventListener("blur", onInputBlur);
const inputLength = Number(onIputBlur.dataset.length);

function onInputBlur(event) {
  if (onIputBlur.value.length === inputLength) {
    onIputBlur.classList.add("valid");
    onIputBlur.classList.remove("invalid");
  } else {
    onIputBlur.classList.add("invalid");
    onIputBlur.classList.remove("valid");
  }
}
