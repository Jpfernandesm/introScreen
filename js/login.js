


/* Variáveis criadas para o input de login (ao escrever), botão para submeter e o formulário*/
const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");

/* Desestruturação de objeto, ainda possuo algumas dúvidas e fico confuso ao método ({target}) */
const validateInput = ({ target }) => {
  if (target.value.length > 2) {         /*Caso o tamanho do target value seja maior que dois, executará o button.removeAttribute. */
    button.removeAttribute("disabled"); /*atributo de remoção*/
    return;
  }
  button.setAttribute("disabled", "");
};
const handleSubmit = (event) => {
  event.preventDefault(); /*Prevenir o comportamento padrão do form*/
  localStorage.setItem("player", input.value);
  /*Salvando a chave player no local storage com o que o usuario digitar*/
};

/* Evento para validar o input e o submit do usuário  */
input.addEventListener("input", validateInput);
input.addEventListener("submit", handleSubmit);



/* No geral, aprendi um pouco mais neste projeto sobre interações como setAttribute e removeAttribute. */
