// Módulo Minefield - Lógica do Campo Minado
const Minefield = (() => {
  // Cria o tabuleiro com a dimensão e quantidade de minas
  function createBoard(rows, cols, mines) {
    if (mines > rows * cols) {
      throw new Error("Número de minas maior que o total de células");
    }

    // Inicializa tabuleiro vazio
    const board = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        hasMine: false,
        revealed: false,
        flagged: false,
        adjacentMines: 0
      }))
    );

    // TODO: Gere posições únicas aleatórias para as minas e distribua no tabuleiro
    // Dica: use Set para evitar posições duplicadas

    // TODO: Calcule minas adjacentes para cada célula não contendo mina

    return board;
  }

  // Conta minas adjacentes a uma célula
  function countAdjacentMines(board, row, col) {
    const rows = board.length;
    const cols = board[0].length;
    let count = 0;
    // TODO: Percorra as células vizinhas e conte minas
    return count;
  }

  // Revela uma célula (row, col)
  function revealCell(board, row, col) {
    const rows = board.length;
    const cols = board[0].length;

    // TODO: Valide coordenadas e estado da célula

    // TODO: Se célula sem minas adjacentes, revele recursivamente vizinhos (flood fill)

    // Retorne status da ação (ex: "mine", "revealed", "already_revealed", "flagged")
  }

  // Marca ou desmarca uma célula com bandeira
  function toggleFlag(board, row, col) {
    const rows = board.length;
    const cols = board[0].length;
    // TODO: Valide coordenadas e estado da célula, alterne flagged se possível
    // Retorne true se bandeira alterada, false caso contrário
  }

  // Verifica se o jogador ganhou
  function checkWin(board) {
    // TODO: Retorne true se todas as células sem minas estiverem reveladas, false caso contrário
  }

  // Função auxiliar para contar bandeiras
  function countFlags(board) {
    let flags = 0;
    // TODO: Conte o número de células marcadas com bandeira
    return flags;
  }

  return {
    createBoard,
    revealCell,
    toggleFlag,
    checkWin,
    countAdjacentMines,
    countFlags
  };
})();

// ------------------ TESTES UNITÁRIOS PARCIAIS ------------------

console.log("Iniciando testes do campo minado...");

// Testa criação do tabuleiro e contagem de minas
(function testCreateBoard() {
  const rows = 5, cols = 5, mines = 5;
  const board = Minefield.createBoard(rows, cols, mines);
  console.assert(board.length === rows, "Número de linhas incorreto");
  console.assert(board[0].length === cols, "Número de colunas incorreto");

  // TODO: Conte minas no tabuleiro e valide campos (revealed, flagged, adjacentMines)

  console.log("Teste createBoard (parcial) executado.");
})();

// Testa revealCell (parcial)
(function testRevealCell() {
  const board = Minefield.createBoard(3, 3, 0);

  // TODO: Revele célula (1,1) e verifique retorno e flood fill

  console.log("Teste revealCell (parcial) executado.");
})();

// Testa toggleFlag (parcial)
(function testToggleFlag() {
  const board = Minefield.createBoard(2, 2, 0);

  // TODO: Tente marcar e desmarcar a célula (0,0), verifique estados

  console.log("Teste toggleFlag (parcial) executado.");
})();

// Testa checkWin (parcial)
(function testCheckWin() {
  const board = Minefield.createBoard(2, 2, 1);

  // TODO: Forçar situação de vitória e derrota, verificar retorno

  console.log("Teste checkWin (parcial) executado.");
})();

// Testa countFlags (parcial)
(function testCountFlags() {
  const board = Minefield.createBoard(2, 2, 0);

  // TODO: Marcar bandeiras e verificar contagem

  console.log("Teste countFlags (parcial) executado.");
})();

console.log("Testes parciais do campo minado prontos para serem completados!");
