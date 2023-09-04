const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const login = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  
  if (login === "" || password === "") {
    return alert('Please fill in all the fields!');
  }
  const userData = { login, password };
  console.log(userData);
  loginForm.reset();
}
