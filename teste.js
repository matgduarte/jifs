var meuBotao = document.getElementById('meu-botao');
var minhaDiv = document.getElementById('minha-div');
var isClicado = false;

meuBotao.addEventListener('click', function() {
  if (!isClicado) {
    minhaDiv.style.backgroundColor = 'blue';
    isClicado = true;
  } else {
    minhaDiv.style.backgroundColor = 'red';
    isClicado = false;
  }
});
