const valor = document.querySelector('.container input');
const resposta = document.querySelector('.resultado');
const tentativa = document.querySelector('.n-tentativa');
const possibilidades = document.querySelector('.n-possibilidades');
const btn = document.querySelector('.btn');

var secretNumber = parseInt(Math.random() * 1001);

const answer = () => {
  // verificar se o valor é válido (entre 1 e 1000)
  if (valor.value <= 0 || valor.value > 1000) {
    document.querySelector('.resultado').innerText = "Digite um número válido";
  } else {
    if(valor.value == secretNumber) {
      document.querySelector('.resultado').innerText = "Parabéns! Você acertou!";
    } else if( valor.value > secretNumber) {
      document.querySelector('.resultado').innerText = "O número secreto é menor";
    } else {
      document.querySelector('.resultado').innerText = "O número secreto é maior";
    }
    
    tentativa.innerText = parseInt(tentativa.innerText) + 1;
    if(tentativa.innerText == 10) {
      alert("Você atingiu o limite de tentativas! " + " O número secreto era " + secretNumber);
      btn.disabled = true;
    }
  }
}

btn.addEventListener("click", answer);


//ainda n implementado o calculo de possibilidades