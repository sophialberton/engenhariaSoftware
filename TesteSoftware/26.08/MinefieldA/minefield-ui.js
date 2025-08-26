document.addEventListener("DOMContentLoaded", () => {
  const rowsInput = document.getElementById('input-rows');
  const colsInput = document.getElementById('input-cols');
  const minesInput = document.getElementById('input-mines');
  const newGameBtn = document.getElementById('btn-new-game');
  const minesRemainingSpan = document.getElementById('mines-left');
  const boardDiv = document.getElementById('board-container');
  const messageP = document.getElementById('message'); // Elemento para mensagens

  // Estado do jogo
  let gameState = {
    rows: 0,
    cols: 0,
    mines: 0,
    board: [],
    gameOver: false,
    flags: 0,

    revealCell(row, col) {
      const result = Minefield.revealCell(this.board, row, col);
      if (result === "mine") {
        this.gameOver = true;
      }
      return result;
    },

    toggleFlag(row, col) {
      const changed = Minefield.toggleFlag(this.board, row, col);
      if (changed) {
        this.flags = Minefield.countFlags(this.board);
      }
    },

    checkWin() {
      return Minefield.checkWin(this.board);
    }
  };

  // Cria o tabuleiro na interface com base no estado do jogo
  function renderBoard() {
    boardDiv.innerHTML = "";
    boardDiv.style.gridTemplateColumns = `repeat(${gameState.cols}, 30px)`;
    boardDiv.style.gridTemplateRows = `repeat(${gameState.rows}, 30px)`;

    for (let r = 0; r < gameState.rows; r++) {
      for (let c = 0; c < gameState.cols; c++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = r;
        cell.dataset.col = c;

        const cellData = gameState.board[r][c];
        if (cellData.revealed) {
          cell.classList.add("revealed");
          if (cellData.hasMine) {
            cell.textContent = "💣";
            cell.classList.add("mine");
          } else if (cellData.adjacentMines > 0) {
            cell.textContent = cellData.adjacentMines;
            // Classe de cor corrigida para corresponder ao CSS
            cell.classList.add(`color-${cellData.adjacentMines}`);
          }
        } else if (cellData.flagged) {
          cell.textContent = "🚩";
        } else {
          cell.textContent = "";
        }
        
        // Desativa o cursor se o jogo acabou
        if (gameState.gameOver) {
            cell.style.cursor = 'default';
        }

        boardDiv.appendChild(cell);
      }
    }

    updateMinesRemaining();
  }

  // Atualiza o texto de minas restantes
  function updateMinesRemaining() {
    minesRemainingSpan.textContent = gameState.mines - gameState.flags;
  }

  // Revela célula e atualiza o tabuleiro, verifica vitória/derrota
  function handleLeftClick(event) {
    if (gameState.gameOver || !event.target.classList.contains("cell")) return;

    const r = parseInt(event.target.dataset.row);
    const c = parseInt(event.target.dataset.col);

    if (gameState.board[r][c].flagged || gameState.board[r][c].revealed) return;

    const result = gameState.revealCell(r, c);

    if (result === "mine") {
      messageP.textContent = "Você perdeu! Explodiu uma mina 💥";
      revealAllMines();
    } else if (gameState.checkWin()) {
      messageP.textContent = "Parabéns! Você venceu o jogo! 🎉";
      gameState.gameOver = true; // Marca como fim de jogo
      revealAllMines();
    }
    
    // Renderiza o tabuleiro após a jogada
    renderBoard();
  }

  // Alterna bandeira na célula
  function handleRightClick(event) {
    event.preventDefault();
    if (gameState.gameOver || !event.target.classList.contains("cell")) return;

    const r = parseInt(event.target.dataset.row);
    const c = parseInt(event.target.dataset.col);

    if (gameState.board[r][c].revealed) return;

    gameState.toggleFlag(r, c);
    renderBoard();
  }

  // Revela todas as minas ao perder ou ganhar
  function revealAllMines() {
    for (let r = 0; r < gameState.rows; r++) {
      for (let c = 0; c < gameState.cols; c++) {
        if (gameState.board[r][c].hasMine) {
          gameState.board[r][c].revealed = true;
        }
      }
    }
  }

  // Inicia um novo jogo
  function startNewGame() {
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    const mines = parseInt(minesInput.value);

    // Validação melhorada
    if (
      isNaN(rows) || rows < 5 ||
      isNaN(cols) || cols < 5 ||
      isNaN(mines) || mines < 1 ||
      mines >= rows * cols // Minas devem ser estritamente menores que o total de células
    ) {
      messageP.textContent = "Por favor, insira valores válidos! (Mínimo 5x5)";
      return;
    }

    messageP.textContent = ""; // Limpa a mensagem de status
    gameState.rows = rows;
    gameState.cols = cols;
    gameState.mines = mines;
    gameState.board = Minefield.createBoard(rows, cols, mines);
    gameState.gameOver = false;
    gameState.flags = 0;

    renderBoard();
  }

  // Eventos
  boardDiv.addEventListener("click", handleLeftClick);
  boardDiv.addEventListener("contextmenu", handleRightClick);
  newGameBtn.addEventListener("click", startNewGame);

  // Inicia o jogo pela primeira vez
  startNewGame();
});