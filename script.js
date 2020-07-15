window.addEventListener('load', start);

function start() {
  let input = document.querySelectorAll("input[type='range']");
  let inputText = document.querySelectorAll("input[type='text']");

  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("input", () => {
      let vermelho = document.getElementById('vermelho').value,
        verde = document.getElementById('verde').value,
        azul = document.getElementById('azul').value;

      var display = document.getElementById('display');
      display.style.background = `rgb(${vermelho},${verde},${azul})`;

      inputText[0].value = vermelho;
      inputText[1].value = verde;
      inputText[2].value = azul;
      inputText[3].value = `RGB(${vermelho},${verde},${azul})`

      // display.innerHTML = `RGB(${vermelho},${verde},${azul})`
    });
  }
}

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);

  e.clearSelection();
});

clipboard.on('error', function (e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});