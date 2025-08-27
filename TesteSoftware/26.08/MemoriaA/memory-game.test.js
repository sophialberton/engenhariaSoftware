(function testMemoryGame() {
  console.log("Iniciando testes do MemoryGame...");

  // Teste: Criação do Tabuleiro
  console.log("Teste: Criação do Tabuleiro");
  const board = MemoryGame.createShuffledBoard(4);
  console.assert(board.length === 8, "O tabuleiro deve ter 8 cartas (4 pares)");

  const symbols = board.map(card => card.symbol);
  const unique = new Set(symbols);
  console.assert(unique.size === 4, "Devem existir exatamente 4 símbolos únicos");

  unique.forEach(sym => {
    const count = symbols.filter(s => s === sym).length;
    console.assert(count === 2, `O símbolo ${sym} deve aparecer exatamente 2 vezes`);
  });

  // -------------------------------------------
  // Teste: Revelar e Combinar Cartas
  // -------------------------------------------
  console.log("Teste: Revelar, Combinar e Esconder Cartas");
  const b = [
      { symbol: 'A', revealed: false, matched: false },
      { symbol: 'B', revealed: false, matched: false },
      { symbol: 'A', revealed: false, matched: false },
      { symbol: 'B', revealed: false, matched: false }
  ];

  // Teste: Revelar carta
  MemoryGame.revealCard(b, 0);
  console.assert(b[0].revealed === true, "A carta 0 deveria estar revelada");

  // Tentar revelar carta já revelada (deve falhar)
  let resultReveal = MemoryGame.revealCard(b, 0);
  console.assert(resultReveal === false, "Não deve ser possível revelar uma carta já revelada");

  // Revelar segunda carta para formar um par
  MemoryGame.revealCard(b, 2);

  // Verificar se as cartas 0 e 2 são um par
  const match = MemoryGame.checkMatch(b, 0, 2);
  console.assert(match === true, "As cartas 0 e 2 deveriam combinar");

  if (match) {
    console.assert(b[0].matched === true && b[2].matched === true, "Ambas as cartas combinadas deveriam estar marcadas como 'matched'");
  }
  
  // Teste com um par que não combina
  MemoryGame.revealCard(b, 1); // Revela 'B'
  MemoryGame.revealCard(b, 2); // Tenta revelar a carta 'A' que já foi combinada
  const noMatch = MemoryGame.checkMatch(b, 1, 2);
  console.assert(noMatch === false, "As cartas 1 e 2 não deveriam combinar");

  if (!noMatch) {
      MemoryGame.hideCards(b, 1, 2);
      // A carta 1 não está combinada, então deve ser escondida. A 2 já está, então não deve mudar.
      console.assert(b[1].revealed === false, "A carta 1 deveria ser escondida após uma tentativa de combinação falha");
      console.assert(b[2].revealed === true, "A carta 2 não deveria ser escondida pois já foi combinada");
  }


  // -------------------------------------------
  // Teste: Vitória
  // -------------------------------------------
  console.log("Teste: Condição de Vitória");
  const winBoard = MemoryGame.createShuffledBoard(2);
  // Marcar todas como matched manualmente
  winBoard.forEach(card => card.matched = true);
  console.assert(MemoryGame.checkWin(winBoard) === true, "checkWin deveria retornar true para um tabuleiro completo");

  const notWinBoard = MemoryGame.createShuffledBoard(2);
  notWinBoard[0].matched = true;
  console.assert(MemoryGame.checkWin(notWinBoard) === false, "checkWin deveria retornar false para um tabuleiro incompleto");


  // -------------------------------------------
  // Teste: Índice inválido
  // -------------------------------------------
  console.log("Teste: Manipulação de Índice Inválido");
  const testBoard = MemoryGame.createShuffledBoard(2);
  
  // Tentar revelar uma carta com índice inválido (-1)
  const resultNegative = MemoryGame.revealCard(testBoard, -1);
  console.assert(resultNegative === false, "A função deve falhar corretamente para índice -1");

  // Tentar revelar uma carta com índice inválido (maior que o tabuleiro)
  const resultOutOfBounds = MemoryGame.revealCard(testBoard, 100);
  console.assert(resultOutOfBounds === false, "A função deve falhar corretamente para um índice fora dos limites");

  console.log("✅ Se todos os testes passarem, seu jogo está funcionando corretamente!");
})();