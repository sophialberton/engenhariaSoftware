(function testMemoryGame() {
  console.log("Iniciando testes do MemoryGame...");

  // TODO: Criar um tabuleiro com 4 pares (8 cartas)
  const board = null; // <- Substituir com chamada à função que cria o tabuleiro

  // TODO: Verificar se o tabuleiro tem 8 cartas
  // console.assert(...)

  // TODO: Obter todos os símbolos do tabuleiro
  const symbols = null; // <- Substituir por extração de símbolos do tabuleiro

  // TODO: Verificar se existem exatamente 4 símbolos únicos
  const unique = null; // <- Substituir com Set de símbolos únicos
  // console.assert(...)

  // TODO: Verificar se cada símbolo aparece exatamente 2 vezes
  // unique.forEach(sym => {
  //   const count = ...
  //   console.assert(...)
  // });

  // -------------------------------------------
  // Teste: Revelar carta
  // -------------------------------------------
  // TODO: Criar tabuleiro com 2 pares
  const b = null;

  // TODO: Revelar a carta 0
  // MemoryGame.revealCard(...)
  // console.assert(...)

  // TODO: Revelar a carta 1
  // MemoryGame.revealCard(...)

  // TODO: Verificar se as cartas 0 e 1 são um par
  const match = null; // MemoryGame.checkMatch(...)

  if (match) {
    // TODO: Verificar se ambas estão marcadas como "matched"
    // console.assert(...)
  } else {
    // TODO: Esconder as cartas se não combinarem
    // MemoryGame.hideCards(...)
    // console.assert(...)
  }

  // -------------------------------------------
  // Teste: Vitória
  // -------------------------------------------
  // TODO: Criar um tabuleiro com todas as cartas combinadas
  const winBoard = null;

  // TODO: Marcar todas como matched manualmente
  // winBoard.forEach(...)

  // TODO: Verificar se checkWin retorna true
  // console.assert(...)

  // -------------------------------------------
  // Teste: Índice inválido
  // -------------------------------------------
  // TODO: Criar tabuleiro
  const testBoard = null;

  // TODO: Tentar revelar uma carta com índice inválido (-1)
  const result = null; // MemoryGame.revealCard(...)

  // TODO: Verificar que a função falha corretamente
  // console.assert(...)

  console.log("✅ Se todos os testes passarem, seu jogo está funcionando corretamente!");
})();

