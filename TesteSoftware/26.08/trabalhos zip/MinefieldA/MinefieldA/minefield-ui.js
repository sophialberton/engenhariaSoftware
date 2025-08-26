document.addEventListener("DOMContentLoaded", () => {
  const rowsInput = document.getElementById('input-rows');
  const colsInput = document.getElementById('input-cols');
  const minesInput = document.getElementById('input-mines');
  const newGameBtn = document.getElementById('btn-new-game');
  const minesRemainingSpan = document.getElementById('mines-left');
  const boardDiv = document.getElementById('board-container');

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
            cell.classList.add(`color-${cellData.adjacentMines}`);
          }
        } else if (cellData.flagged) {
          cell.textContent = "🚩";
        } else {
          cell.textContent = "";
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
    if (!event.target.classList.contains("cell")) return;

    const r = parseInt(event.target.dataset.row);
    const c = parseInt(event.target.dataset.col);

    if (gameState.board[r][c].flagged || gameState.board[r][c].revealed) return;
    if (gameState.gameOver) return;

    const result = gameState.revealCell(r, c);

    renderBoard();

    if (result === "mine") {
      alert("Você perdeu! Explodiu uma mina 💥");
      revealAllMines();
    } else if (gameState.checkWin()) {
      alert("Parabéns! Você venceu o jogo! 🎉");
      revealAllMines();
    }
  }

  // Alterna bandeira na célula
  function handleRightClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("cell")) return;

    if (gameState.gameOver) return;

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
    renderBoard();
  }

  // Inicia um novo jogo
  function startNewGame() {
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    const mines = parseInt(minesInput.value);

    if (
      isNaN(rows) || rows < 1 ||
      isNaN(cols) || cols < 1 ||
      isNaN(mines) || mines < 1 ||
      mines >= rows * cols
    ) {
      alert("Por favor, insira valores válidos! Minas devem ser menos que o total de células.");
      return;
    }

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

