const valor = document.querySelector('.container input');
const btn = document.querySelector('.btn');

var secretNumber = parseInt(Math.random() * 1001);

const answer = () => {
	if(valor.value == secretNumber) {
     document.querySelector('.resultado').innerText = "Parabéns! Você acertou!";
   } else if( valor.value > secretNumber) {
     document.querySelector('.resultado').innerText = "O número secreto é menor";
   } else {
     document.querySelector('.resultado').innerText = "O número secreto é maior";
   }
}

btn.addEventListener("click", answer);