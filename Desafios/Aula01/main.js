// capturar dos valores no HTML
const valor_1 = document.querySelector('.valor-1 input');
const btn1 = document.querySelector('.btn-1');


const nome_2 = document.querySelector('.nome-2 input');
const valor_2 = document.querySelector('.valor-2 input');
const btn2 = document.querySelector('.btn-2');

const valor_3 = document.querySelector('.valor-3 input');
const btn3 = document.querySelector('.btn-3');



// funcoes

const converter1 = () => {
  const valor = valor_1.value;
  const resultado = valor / 8121.04;
  document.querySelector(".valor-x-1").innerText = resultado.toFixed(8);
}

const converter2 = () => {
  const valor2 = valor_2.value;
  const nome2 = nome_2.value;
  const resultado2 = valor2 * 5.12;
  document.querySelector('.name-x-2').innerText = nome2;
  document.querySelector(".valor-x-2").innerText = resultado2.toFixed(2);
}

const converter3 = () => {
  const valor3 = valor_3.value;
  const resultado3 = valor3 * 9460730472580800;
  document.querySelector('.valor-x-3').innerText = resultado3;
}

// acoes

btn1.addEventListener("click", converter1);
btn2.addEventListener("click", converter2);
btn3.addEventListener("click", converter3);