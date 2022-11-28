// capturando o evento de submit do formulário

const form = document. querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('evento previnido.')
  setResultado('olá mundo')
  
})

function setResultado (msg) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = msg;
}