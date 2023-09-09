const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;
  const data = {
    email: email.value,
    password: password.value,
  };
  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  event.currentTarget.reset();
  console.log(data);
}
