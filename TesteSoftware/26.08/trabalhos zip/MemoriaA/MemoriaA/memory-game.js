const MemoryGame = (() => {
  // Cria um tabuleiro embaralhado com pares de símbolos
  function createShuffledBoard(pairs = 8) {
    const symbols = [];

    for (let i = 0; i < pairs; i++) {
      const symbol = String.fromCharCode(65 + i); // A, B, C...
      symbols.push(symbol, symbol); // 2 de cada
    }

    // Embaralha o array com Fisher-Yates
    for (let i = symbols.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [symbols[i], symbols[j]] = [symbols[j], symbols[i]];
    }

    // Mapeia símbolos para objetos do jogo
    return symbols.map(symbol => ({
      symbol,
      revealed: false,
      matched: false
    }));
  }

  // Revela uma carta, se válida
  function revealCard(board, index) {
    if (
      index < 0 ||
      index >= board.length ||
      board[index].matched ||
      board[index].revealed
    ) {
      return false;
    }

    board[index].revealed = true;
    return true;
  }

  // Esconde duas cartas (se não forem pares)
  function hideCards(board, idx1, idx2) {
    // TODO: Esconder as duas cartas (revealed = false)
    // Dica:
    // board[idx1].revealed = false;
    // board[idx2].revealed = false;
  }

  // Verifica se duas cartas combinam
  function checkMatch(board, idx1, idx2) {
    // TODO: Verificar se os índices são válidos
    // TODO: Verificar se os símbolos são iguais
    // TODO: Marcar as duas como matched = true se for par
    // TODO: Retornar true se combinarem, false caso contrário
    return false;
  }

  // Verifica se todas as cartas foram combinadas
  function checkWin(board) {
    return board.every(card => card.matched);
  }

  return {
    createShuffledBoard,
    revealCard,
    hideCards,      
    checkMatch,     
    checkWin
  };
})();
