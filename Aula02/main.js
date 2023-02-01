var secretNumber = parseInt(Math.random() * 1001);

while(attempt != secretNumber) {
  var attempt = prompt("Digite um número entre 1 e 1000")
  if (attempt == secretNumber) {
    alert("Parabéns! Você acertou!");
  } else if (attempt > secretNumber) {
    alert("O número secreto é menor");
  } else {
    alert("O número secreto é maior");
  }
}