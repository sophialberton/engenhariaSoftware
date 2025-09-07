// --- Estado do jogo ---
const diceGame = (() => {
  // Placar
  let player1Wins = 0;
  let player2Wins = 0;
  let ties = 0;

  // Rola um dado (1 a 6)
  function rollDice() {
    // TODO: implementar função que retorna um número aleatório de 1 a 6
    // Dica: use Math.random()
  }

  // Decide o vencedor da rodada: "player1", "player2" ou "tie"
  function decideWinner(p1Roll, p2Roll) {
    // TODO: comparar os valores p1Roll e p2Roll e retornar:
    // "player1" se p1Roll > p2Roll
    // "player2" se p2Roll > p1Roll
    // "tie" se forem iguais
  }

  // Atualiza o placar
  function updateScoreboard(winner) {
    // TODO: incrementar o placar correto baseado no vencedor
    // lembre-se que winner pode ser "player1", "player2" ou "tie"
  }

  // Reinicia o placar
  function resetGame() {
    player1Wins = 0;
    player2Wins = 0;
    ties = 0;
  }

  // Retorna o placar atual (para testes e interface)
  function getScore() {
    return { player1Wins, player2Wins, ties };
  }

  // Expor funções públicas
  return {
    rollDice,
    decideWinner,
    updateScoreboard,
    resetGame,
    getScore
  };
})();

// --- Manipulação da interface ---

const player1RollEl = document.getElementById("player1-roll");
const player2RollEl = document.getElementById("player2-roll");
const roundResultEl = document.getElementById("round-result");
const player1WinsEl = document.getElementById("player1-wins");
const player2WinsEl = document.getElementById("player2-wins");
const tiesEl = document.getElementById("ties");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");
const statusEl = document.getElementById("status");

function updateScoreboardUI() {
  const score = diceGame.getScore();
  player1WinsEl.textContent = score.player1Wins;
  player2WinsEl.textContent = score.player2Wins;
  tiesEl.textContent = score.ties;
}

function playRound() {
  const p1Roll = diceGame.rollDice();
  const p2Roll = diceGame.rollDice();

  player1RollEl.textContent = p1Roll;
  player2RollEl.textContent = p2Roll;

  const winner = diceGame.decideWinner(p1Roll, p2Roll);

  diceGame.updateScoreboard(winner);

  if (winner === "player1") {
    roundResultEl.textContent = "Jogador 1 ganhou esta rodada!";
  } else if (winner === "player2") {
    roundResultEl.textContent = "Jogador 2 ganhou esta rodada!";
  } else {
    roundResultEl.textContent = "Esta rodada terminou empatada!";
  }

  updateScoreboardUI();

  statusEl.textContent = "Clique em 'Jogar' para próxima rodada.";
}

function resetGameUI() {
  diceGame.resetGame();
  player1RollEl.textContent = "-";
  player2RollEl.textContent = "-";
  roundResultEl.textContent = "";
  statusEl.textContent = "Placar resetado! Clique em 'Jogar' para começar.";
  updateScoreboardUI();
}

playBtn.addEventListener("click", playRound);
resetBtn.addEventListener("click", resetGameUI);

resetGameUI();


// --- Testes no console usando console.assert() ---
// COMPLETE os testes abaixo, escrevendo asserções que verifiquem as funções do jogo:

console.log("Iniciando testes do jogo de dados...");

// Testa rollDice() - valores válidos
for(let i = 0; i < 1000; i++) {
  const roll = diceGame.rollDice();
  // TODO: use console.assert para verificar se roll está entre 1 e 6
  // Exemplo: console.assert(roll >= 1 && roll <= 6, "Mensagem de erro");
}

// Testa decideWinner()
// TODO: teste pelo menos 3 casos, um para vitória do player1, um para vitória do player2, e um empate
// Exemplo:
// console.assert(diceGame.decideWinner(6, 3) === "player1", "Mensagem");

// Testa updateScoreboard()
diceGame.resetGame();

// TODO: chame updateScoreboard("player1") e verifique se player1Wins incrementou
// TODO: chame updateScoreboard("player2") e verifique se player2Wins incrementou
// TODO: chame updateScoreboard("tie") e verifique se ties incrementou

// Testa resetGame()
diceGame.resetGame();
let score = diceGame.getScore();

// TODO: verifique se todos os valores do placar estão zerados após resetGame()
// Exemplo:
// console.assert(score.player1Wins === 0, "Mensagem");

// Finalize com mensagem de sucesso (após completar os testes)
console.log("Complete os testes para verificar a lógica do jogo.");
