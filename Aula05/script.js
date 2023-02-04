var joao = {
  nome: "João",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var nicolas = {
  nome: "Nicolas",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var elementoTabela = document.getElementById("tabelaJogadores");
function exibirNaTela() {
  elementoTabela.innerHTML = `
    <tr>
      <td>${nicolas.nome}</td>
      <td>${nicolas.vitorias}</td>
      <td>${nicolas.empates}</td>
      <td>${nicolas.derrotas}</td>
      <td>${nicolas.pontos}</td>
      <td><button onClick="adicionarVitoria(nicolas)">Vitória</button></td>
      <td><button onClick="adicionarEmpate(nicolas)">Empate</button></td>
      <td><button onClick="adicionarDerrota(nicolas)">Derrota</button></td>
    </tr>
  `;
}
exibirNaTela()

function adicionarVitoria(jogador) {
  jogador.vitorias++;
  jogador.pontos = jogador.vitorias * 2 + jogador.empates;
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  jogador.empates++;
  jogador.pontos++;
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  jogador.derrotas--;
  jogador.pontos--;
  exibirNaTela();
}