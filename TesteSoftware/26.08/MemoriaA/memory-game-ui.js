document.addEventListener("DOMContentLoaded", () => {
  const boardDiv = document.getElementById("game-board");
  const restartBtn = document.getElementById("btn-restart");

  let board = [];
  let firstCardIndex = null;
  let lock = false;

  function renderBoard() {
    boardDiv.innerHTML = "";
    board.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";
      if (card.revealed || card.matched) {
        cardDiv.classList.add("revealed");
        cardDiv.textContent = card.symbol;
      } else {
        cardDiv.textContent = "";
      }

      cardDiv.addEventListener("click", () => handleCardClick(index));
      boardDiv.appendChild(cardDiv);
    });
  }

  function handleCardClick(index) {
    if (lock || board[index].revealed || board[index].matched) return;

    MemoryGame.revealCard(board, index);
    renderBoard();

    if (firstCardIndex === null) {
      firstCardIndex = index;
    } else {
      lock = true;
      const secondCardIndex = index;
      const isMatch = MemoryGame.checkMatch(board, firstCardIndex, secondCardIndex);
      setTimeout(() => {
        if (!isMatch) {
          MemoryGame.hideCards(board, firstCardIndex, secondCardIndex);
        }
        renderBoard();
        if (MemoryGame.checkWin(board)) {
          alert("🎉 Você venceu!");
        }
        firstCardIndex = null;
        lock = false;
      }, 800);
    }
  }

  function startGame() {
    board = MemoryGame.createShuffledBoard();
    firstCardIndex = null;
    lock = false;
    renderBoard();
  }

  restartBtn.addEventListener("click", startGame);

  startGame();
});
