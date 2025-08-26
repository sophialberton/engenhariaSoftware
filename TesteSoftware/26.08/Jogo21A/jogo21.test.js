// jogo21.test.js - Testes unitários do Jogo21 (Versão Melhorada)

(() => {
  console.log("Iniciando testes do Jogo21...");

  // --- Testes de Funções Puras ---

  console.assert(Jogo21.criarBaralho().length === 52, "Teste Falhou: Baralho deve ter 52 cartas.");
  
  const baralhoOriginal = Jogo21.criarBaralho();
  const baralhoEmbaralhado = Jogo21.embaralhar([...baralhoOriginal]);
  console.assert(baralhoEmbaralhado.length === 52, "Teste Falhou: Baralho embaralhado deve manter 52 cartas.");
  // Um teste simples para verificar se a ordem mudou (pode falhar raramente, mas é bom o suficiente aqui)
  console.assert(JSON.stringify(baralhoOriginal) !== JSON.stringify(baralhoEmbaralhado), "Teste Falhou: O baralho não foi embaralhado.");

  console.assert(Jogo21.calcularPontos([{face:'2'}, {face:'3'}]) === 5, "Teste Falhou: Pontos para 2+3 devem ser 5.");
  console.assert(Jogo21.calcularPontos([{face:'A'}, {face:'9'}]) === 20, "Teste Falhou: Pontos para A+9 devem ser 20.");
  console.assert(Jogo21.calcularPontos([{face:'A'}, {face:'9'}, {face:'5'}]) === 15, "Teste Falhou: Pontos para A+9+5 devem ser 15 (Ás vira 1).");
  console.assert(Jogo21.calcularPontos([{face:'A'}, {face:'A'}, {face:'9'}]) === 21, "Teste Falhou: Pontos para A+A+9 devem ser 21 (11+1+9).");
  console.assert(Jogo21.calcularPontos([{face:'K'}, {face:'Q'}]) === 20, "Teste Falhou: Pontos para K+Q devem ser 20.");

  // --- Testes de Lógica do Jogo com Baralho Controlado ---

  // Baralho determinístico para testes (invertido, pois `pop` remove do fim)
  const baralhoDeTeste = [
    {face:'5', naipe:'♦'}, {face:'K', naipe:'♣'}, // Mão do Dealer: 15 pontos
    {face:'A', naipe:'♥'}, {face:'Q', naipe:'♠'}, // Mão do Jogador: 21 pontos (Blackjack)
    {face:'J', naipe:'♦'}, // Próxima carta para Hit
    {face:'8', naipe:'♣'}, // Próxima carta para o Dealer
  ].reverse();

  // Teste 1: Iniciar jogo e verificar Blackjack do jogador
  let estado = Jogo21.iniciarJogo([...baralhoDeTeste]);
  console.assert(estado.maoJogador.length === 2, "Teste Falhou: Jogador deve começar com 2 cartas.");
  console.assert(estado.maoDealer.length === 2, "Teste Falhou: Dealer deve começar com 2 cartas.");
  console.assert(estado.pontosJogador === 21, "Teste Falhou: Jogador deveria ter 21 pontos (Blackjack).");
  console.assert(estado.pontosDealer === 15, "Teste Falhou: Dealer deveria ter 15 pontos.");
  console.assert(estado.baralho.length === 2, "Teste Falhou: Baralho deveria ter 2 cartas restantes.");

  // Teste 2: Turno do Dealer (com Blackjack do jogador, o dealer nem jogaria, mas testamos a lógica)
  let estadoFinal = Jogo21.dealerTurn(estado);
  // Como o dealer tem 15, ele deve comprar uma carta (o '8 de paus')
  console.assert(estadoFinal.maoDealer.length === 3, "Teste Falhou: Dealer deveria comprar uma carta.");
  console.assert(estadoFinal.pontosDealer === 23, "Teste Falhou: Dealer deveria estourar com 23 pontos.");
  console.assert(estadoFinal.status === 'vitoria', "Teste Falhou: Jogador deveria vencer pois dealer estourou.");

  // Teste 3: Cenário de "Hit" do jogador
  const baralhoHit = [
    {face:'3', naipe:'♦'}, {face:'5', naipe:'♣'}, // Mão do Dealer: 8 pontos
    {face:'6', naipe:'♥'}, {face:'7', naipe:'♠'}, // Mão do Jogador: 13 pontos
    {face:'8', naipe:'♦'}, // Carta para o Hit do jogador -> 13 + 8 = 21
  ].reverse();

  estado = Jogo21.iniciarJogo([...baralhoHit]);
  console.assert(estado.pontosJogador === 13, "Teste Falhou: Pontuação inicial do jogador deveria ser 13.");
  
  estado = Jogo21.jogadorHit(estado);
  console.assert(estado.maoJogador.length === 3, "Teste Falhou: Jogador deveria ter 3 cartas após Hit.");
  console.assert(estado.pontosJogador === 21, "Teste Falhou: Jogador deveria ter 21 pontos após Hit.");
  console.assert(estado.status === 'jogando', "Teste Falhou: Jogo deveria continuar após Hit bem-sucedido.");

  // Teste 4: Jogador estoura (bust)
  const baralhoBust = [
      {face:'3', naipe:'♦'}, {face:'5', naipe:'♣'},
      {face:'K', naipe:'♥'}, {face:'Q', naipe:'♠'}, // Mão do Jogador: 20 pontos
      {face:'J', naipe:'♦'}, // Carta para o Hit -> 20 + 10 = 30 (Bust)
  ].reverse();
  estado = Jogo21.iniciarJogo([...baralhoBust]);
  estado = Jogo21.jogadorHit(estado);
  console.assert(estado.pontosJogador === 30, "Teste Falhou: Jogador deveria ter 30 pontos.");
  console.assert(estado.status === 'derrota', "Teste Falhou: Status deveria ser 'derrota' após estourar.");


  console.log("✅ Todos os testes do Jogo21 (versão melhorada) passaram.");
})();