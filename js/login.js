const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");
/*Desestruturação de objeto*/

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }
  button.setAttribute("disabled", "");
};
const handleSubmit = (event) => {
  event.preventDefault(); /*Prevenir o comportamento padrão do form*/
  localStorage.setItem("player", input.value);
  /*Salvando a chave player no local storage com o que o usuario digitar*/
};

input.addEventListener("input", validateInput);
input.addEventListener("submit", handleSubmit);
