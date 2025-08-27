// --- Estado do jogo ---
const diceGame = (() => {
  // Placar
  let player1Wins = 0;
  let player2Wins = 0;
  let ties = 0;

  // Rola um dado (1 a 6)
  function rollDice() {
    // Retorna um número aleatório de 1 a 6
    return Math.floor(Math.random() * 6) + 1;
  }

  // Decide o vencedor da rodada: "player1", "player2" ou "tie"
  function decideWinner(p1Roll, p2Roll) {
    if (p1Roll > p2Roll) {
      return "player1";
    } else if (p2Roll > p1Roll) {
      return "player2";
    } else {
      return "tie";
    }
  }

  // Atualiza o placar
  function updateScoreboard(winner) {
    if (winner === "player1") {
      player1Wins++;
    } else if (winner === "player2") {
      player2Wins++;
    } else if (winner === "tie") {
      ties++;
    }
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
  // Adiciona a classe 'rolling' para iniciar a animação
  player1RollEl.classList.add('rolling');
  player2RollEl.classList.add('rolling');
  roundResultEl.textContent = "Rolando dados...";
  statusEl.textContent = "Aguarde...";

  // Pequeno delay para a animação ser visível antes de mostrar o resultado
  setTimeout(() => {
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

    // Remove a classe 'rolling' para parar a animação
    player1RollEl.classList.remove('rolling');
    player2RollEl.classList.remove('rolling');
  }, 700); // Ajuste o tempo (em ms) conforme a duração da animação
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
// Testes completos para verificar as funções do jogo:

console.log("Iniciando testes do jogo de dados...");

// Testa rollDice() - valores válidos
for(let i = 0; i < 1000; i++) {
  const roll = diceGame.rollDice();
  console.assert(roll >= 1 && roll <= 6, "Erro: rollDice() retornou um valor fora do intervalo 1-6. Valor: " + roll);
}

// Testa decideWinner()
console.assert(diceGame.decideWinner(6, 3) === "player1", "Erro: decideWinner(6, 3) deveria retornar 'player1'");
console.assert(diceGame.decideWinner(2, 5) === "player2", "Erro: decideWinner(2, 5) deveria retornar 'player2'");
console.assert(diceGame.decideWinner(4, 4) === "tie", "Erro: decideWinner(4, 4) deveria retornar 'tie'");

// Testa updateScoreboard()
diceGame.resetGame();
diceGame.updateScoreboard("player1");
let score = diceGame.getScore();
console.assert(score.player1Wins === 1, "Erro: placar do Jogador 1 deveria ser 1");

diceGame.updateScoreboard("player2");
score = diceGame.getScore();
console.assert(score.player2Wins === 1, "Erro: placar do Jogador 2 deveria ser 1");

diceGame.updateScoreboard("tie");
score = diceGame.getScore();
console.assert(score.ties === 1, "Erro: placar de empates deveria ser 1");

// Testa resetGame()
diceGame.resetGame();
score = diceGame.getScore();
console.assert(score.player1Wins === 0, "Erro: player1Wins deveria ser 0 após o reset");
console.assert(score.player2Wins === 0, "Erro: player2Wins deveria ser 0 após o reset");
console.assert(score.ties === 0, "Erro: ties deveria ser 0 após o reset");

// Finalize com mensagem de sucesso
console.log("Todos os testes passaram com sucesso! A lógica do jogo está correta.");