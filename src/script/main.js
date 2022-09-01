const start = () => {
  let input = document.querySelectorAll("input[type='range']");
  let inputText = document.querySelectorAll("input[type='text']");
  let display = document.getElementById("display");
  let button = document.getElementById("button");
  let result = document.getElementById("copiar").value;

  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("input", () => {
      let vermelho = document.getElementById("vermelho").value,
        verde = document.getElementById("verde").value,
        azul = document.getElementById("azul").value;

      inputText[0].value = vermelho;
      inputText[1].value = verde;
      inputText[2].value = azul;
      inputText[3].value = result = `RGB(${vermelho},${verde},${azul})`;
      display.style.background = `rgb(${vermelho},${verde},${azul})`;
    });
  }
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(result);
  });
};

window.addEventListener("DOMContentLoaded", start());