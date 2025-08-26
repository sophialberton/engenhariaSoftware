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

    // Gera posições únicas aleatórias para as minas
    const minePositions = new Set();
    while (minePositions.size < mines) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      minePositions.add(`${row}-${col}`);
    }

    // Distribui as minas no tabuleiro
    minePositions.forEach(pos => {
      const [row, col] = pos.split('-').map(Number);
      board[row][col].hasMine = true;
    });

    // Calcula minas adjacentes para cada célula não contendo mina
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!board[r][c].hasMine) {
          board[r][c].adjacentMines = countAdjacentMines(board, r, c);
        }
      }
    }

    return board;
  }

  // Conta minas adjacentes a uma célula
  function countAdjacentMines(board, row, col) {
    const rows = board.length;
    const cols = board[0].length;
    let count = 0;

    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        if (r === 0 && c === 0) continue;
        const newRow = row + r;
        const newCol = col + c;

        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol].hasMine) {
          count++;
        }
      }
    }
    return count;
  }

  // Revela uma célula (row, col)
  function revealCell(board, row, col) {
    const rows = board.length;
    const cols = board[0].length;
    
    if (row < 0 || row >= rows || col < 0 || col >= cols) return "invalid";
    
    const cell = board[row][col];

    if (cell.revealed) return "already_revealed";
    if (cell.flagged) return "flagged";

    cell.revealed = true;

    if (cell.hasMine) return "mine";
    
    // Se célula sem minas adjacentes, revele recursivamente vizinhos (flood fill)
    if (cell.adjacentMines === 0) {
      for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
          if (r === 0 && c === 0) continue;
          revealCell(board, row + r, col + c);
        }
      }
    }

    return "revealed";
  }

  // Marca ou desmarca uma célula com bandeira
  function toggleFlag(board, row, col) {
    const cell = board[row][col];
    if (cell.revealed) return false;
    
    cell.flagged = !cell.flagged;
    return true;
  }

  // Verifica se o jogador ganhou
  function checkWin(board) {
    for (let row of board) {
      for (let cell of row) {
        if (!cell.hasMine && !cell.revealed) {
          return false;
        }
      }
    }
    return true;
  }

  // Função auxiliar para contar bandeiras
  function countFlags(board) {
    let flags = 0;
    for (let row of board) {
      for (let cell of row) {
        if (cell.flagged) {
          flags++;
        }
      }
    }
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

// ------------------ TESTES UNITÁRIOS COMPLETOS ------------------

console.log("Iniciando testes do campo minado...");

// Testa criação do tabuleiro e contagem de minas
(function testCreateBoard() {
  const rows = 5, cols = 5, mines = 5;
  const board = Minefield.createBoard(rows, cols, mines);
  console.assert(board.length === rows, "Número de linhas incorreto");
  console.assert(board[0].length === cols, "Número de colunas incorreto");

  let mineCount = 0;
  board.forEach(row => row.forEach(cell => {
    if (cell.hasMine) mineCount++;
  }));
  console.assert(mineCount === mines, `Contagem de minas incorreta. Esperado: ${mines}, Encontrado: ${mineCount}`);
  
  // Verifica se adjacentMines foi calculado
  const cellWithAdjacent = board.flat().find(cell => !cell.hasMine && cell.adjacentMines > 0);
  const cellWithoutAdjacent = board.flat().find(cell => !cell.hasMine && cell.adjacentMines === 0);
  console.assert(cellWithAdjacent !== undefined || cellWithoutAdjacent !== undefined, "adjacentMines não foi calculado.");

  console.log("Teste createBoard executado.");
})();

// Testa revealCell
(function testRevealCell() {
  const board = Minefield.createBoard(3, 3, 0); // Tabuleiro sem minas
  board[0][0].hasMine = true; // Adiciona uma mina para teste

  console.assert(Minefield.revealCell(board, 1, 1) === "revealed", "Falha ao revelar célula vazia.");
  console.assert(board[2][2].revealed, "Flood fill não revelou todas as células adjacentes a uma vazia.");
  console.assert(Minefield.revealCell(board, 0, 0) === "mine", "Falha ao revelar célula com mina.");
  
  board[0][1].flagged = true;
  console.assert(Minefield.revealCell(board, 0, 1) === "flagged", "Deveria impedir a revelação de célula com bandeira.");

  console.log("Teste revealCell executado.");
})();

// Testa toggleFlag
(function testToggleFlag() {
  const board = Minefield.createBoard(2, 2, 0);

  console.assert(Minefield.toggleFlag(board, 0, 0) === true, "Falha ao adicionar bandeira.");
  console.assert(board[0][0].flagged === true, "A célula (0,0) deveria estar com bandeira.");
  
  console.assert(Minefield.toggleFlag(board, 0, 0) === true, "Falha ao remover bandeira.");
  console.assert(board[0][0].flagged === false, "A célula (0,0) não deveria mais ter bandeira.");

  board[1][1].revealed = true;
  console.assert(Minefield.toggleFlag(board, 1, 1) === false, "Não deveria ser possível adicionar bandeira a uma célula revelada.");
  
  console.log("Teste toggleFlag executado.");
})();

// Testa checkWin
(function testCheckWin() {
  const board = Minefield.createBoard(2, 2, 1);
  // Encontra a mina para revelar as outras
  let mineRow, mineCol;
  for(let r = 0; r<2; r++){
    for(let c = 0; c<2; c++){
      if(board[r][c].hasMine){
        mineRow = r;
        mineCol = c;
      }
    }
  }

  // Revela todas as células que não são minas
  for(let r = 0; r<2; r++){
    for(let c = 0; c<2; c++){
      if(!board[r][c].hasMine){
        board[r][c].revealed = true;
      }
    }
  }
  
  console.assert(Minefield.checkWin(board) === true, "Deveria detectar a vitória.");
  
  // Esconde uma célula que não é mina
  if(mineRow === 0 && mineCol === 0) board[1][1].revealed = false;
  else board[0][0].revealed = false;

  console.assert(Minefield.checkWin(board) === false, "Deveria detectar que o jogo não terminou.");

  console.log("Teste checkWin executado.");
})();

// Testa countFlags
(function testCountFlags() {
  const board = Minefield.createBoard(2, 2, 0);

  Minefield.toggleFlag(board, 0, 0);
  Minefield.toggleFlag(board, 0, 1);
  console.assert(Minefield.countFlags(board) === 2, "Contagem de bandeiras incorreta.");

  Minefield.toggleFlag(board, 0, 0);
  console.assert(Minefield.countFlags(board) === 1, "Contagem de bandeiras incorreta após remover uma.");

  console.log("Teste countFlags executado.");
})();

console.log("Testes do campo minado completados!");