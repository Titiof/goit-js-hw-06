const e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();const t=e.elements.email.value,n=e.elements.password.value;if(""===t||""===n)return alert("Please fill in all the fields!");const s={login:t,password:n};console.log(s),e.reset()}));
//# sourceMappingURL=task-08.e28b3fbc.js.map
