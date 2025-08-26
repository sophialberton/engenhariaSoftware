// jogo21.js - Lógica do Jogo21 (esqueleto para alunos preencherem)

const Jogo21 = (() => {
  const valoresCartas = {
    '2': 2, '3': 3, '4': 4, '5': 5,
    '6': 6, '7': 7, '8': 8, '9': 9,
    '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': 11
  };

  // TODO: Cria um baralho padrão de 52 cartas
  function criarBaralho() {
    // TODO: implementar criação do baralho
  }

  // TODO: Embaralha o baralho usando Fisher-Yates
  function embaralhar(baralho) {
    // TODO: implementar embaralhamento
  }

  // TODO: Calcula a pontuação da mão, considerando Ás como 1 ou 11
  function calcularPontos(mao) {
    // TODO: implementar cálculo dos pontos
  }

  // TODO: Inicializa o jogo com baralho embaralhado, mãos do jogador e dealer
  function iniciarJogo() {
    // TODO: implementar inicialização do jogo
  }

  // TODO: Jogador compra uma carta (hit)
  function jogadorHit(estado) {
    // TODO: implementar ação de compra de carta pelo jogador
  }

  // TODO: Dealer compra cartas até alcançar 17 pontos ou mais
  function dealerTurn(estado) {
    // TODO: implementar turno do dealer
  }

  // TODO: Verifica o status do jogo: vitória, derrota, empate, jogando
  function verificarVencedor(estado) {
    // TODO: retornar o status atual do jogo
  }

  return {
    criarBaralho,
    embaralhar,
    calcularPontos,
    iniciarJogo,
    jogadorHit,
    dealerTurn,
    verificarVencedor
  };
})();
