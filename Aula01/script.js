const valor = document.querySelector('.valor input');
const btn1 = document.querySelector('.btn');

const conversao = () => {
  const x = valor.value;
  const resultado = x / 5.06;
  document.querySelector(".resposta").innerText = resultado.toFixed(2);
}

btn1.addEventListener("click", conversao);