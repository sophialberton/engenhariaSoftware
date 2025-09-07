// Importa a lógica do jogo do arquivo script.js
const diceGame = require('./script.js');
const assert = require('assert');

console.log("Iniciando testes do jogo de dados com Node.js...");

// Testa rollDice() - valores válidos
for(let i = 0; i < 1000; i++) {
  const roll = diceGame.rollDice();
  assert(roll >= 1 && roll <= 6, "Erro: O valor do dado está fora do intervalo de 1 a 6.");
}

// Testa decideWinner()
assert.strictEqual(diceGame.decideWinner(6, 3), "player1", "Erro no decideWinner: player1 deveria ganhar.");
assert.strictEqual(diceGame.decideWinner(2, 5), "player2", "Erro no decideWinner: player2 deveria ganhar.");
assert.strictEqual(diceGame.decideWinner(4, 4), "tie", "Erro no decideWinner: deveria ser um empate.");

// Testa updateScoreboard()
diceGame.resetGame();
diceGame.updateScoreboard("player1");
let score = diceGame.getScore();
assert.strictEqual(score.player1Wins, 1, "Erro no updateScoreboard: placar do player1 deveria ser 1.");

diceGame.updateScoreboard("player2");
score = diceGame.getScore();
assert.strictEqual(score.player2Wins, 1, "Erro no updateScoreboard: placar do player2 deveria ser 1.");

diceGame.updateScoreboard("tie");
score = diceGame.getScore();
assert.strictEqual(score.ties, 1, "Erro no updateScoreboard: placar de empates deveria ser 1.");

// Testa resetGame()
diceGame.resetGame();
score = diceGame.getScore();
assert.strictEqual(score.player1Wins, 0, "Erro no resetGame: placar do player1 deveria ser 0.");
assert.strictEqual(score.player2Wins, 0, "Erro no resetGame: placar do player2 deveria ser 0.");
assert.strictEqual(score.ties, 0, "Erro no resetGame: placar de empates deveria ser 0.");

console.log("Todos os testes com Node.js passaram com sucesso!");