// jogo21.test.js - Testes unitários do Jogo21 com feedback individual

(() => {
  console.log("--- Iniciando testes do Jogo21 ---");

  // Teste: Criar um baralho e testar seu tamanho
  const baralho = Jogo21.criarBaralho();
  console.assert(baralho.length === 52, "FALHOU: O baralho deve ter 52 cartas");
  if (baralho.length === 52) console.log("✅ PASSOU: criarBaralho() - O baralho tem 52 cartas.");

  // Teste: Embaralhar o baralho e testar tamanho
  const baralhoEmbaralhado = Jogo21.embaralhar([...baralho]);
  console.assert(baralhoEmbaralhado.length === 52, "FALHOU: O baralho embaralhado deve ter 52 cartas");
  if (baralhoEmbaralhado.length === 52) console.log("✅ PASSOU: embaralhar() - O baralho embaralhado mantém 52 cartas.");

  // Teste: Cálculo de pontos com cartas simples
  let maoSimples = [{face:'2', naipe:'♠'}, {face:'3', naipe:'♥'}];
  console.assert(Jogo21.calcularPontos(maoSimples) === 5, "FALHOU: Pontos de 2 + 3 devem ser 5");
  if (Jogo21.calcularPontos(maoSimples) === 5) console.log("✅ PASSOU: calcularPontos() - Soma de cartas simples (2+3=5).");

  // Teste: Cálculo de pontos com Ás valendo 11
  let maoAs11 = [{face:'A', naipe:'♠'}, {face:'9', naipe:'♦'}];
  console.assert(Jogo21.calcularPontos(maoAs11) === 20, "FALHOU: Pontos com Ás como 11 + 9 devem ser 20");
  if (Jogo21.calcularPontos(maoAs11) === 20) console.log("✅ PASSOU: calcularPontos() - Ás vale 11 para um total de 20.");

  // Teste: Cálculo de pontos com Ás valendo 1
  let maoAs1 = [{face:'A', naipe:'♠'}, {face:'9', naipe:'♦'}, {face:'5', naipe:'♥'}];
  console.assert(Jogo21.calcularPontos(maoAs1) === 15, "FALHOU: Pontos com Ás como 1 + 9 + 5 devem ser 15");
  if (Jogo21.calcularPontos(maoAs1) === 15) console.log("✅ PASSOU: calcularPontos() - Ás vale 1 para evitar estourar (total 15).");

  // Teste: Iniciar jogo - verificar tamanho do baralho e mãos
  const estadoInicial = Jogo21.iniciarJogo();
  console.assert(estadoInicial.baralho.length === 48, "FALHOU: Baralho deve ter 48 cartas após iniciar jogo");
  console.assert(estadoInicial.maoJogador.length === 2, "FALHOU: Jogador deve começar com 2 cartas");
  console.assert(estadoInicial.maoDealer.length === 2, "FALHOU: Dealer deve começar com 2 cartas");
  if (estadoInicial.baralho.length === 48 && estadoInicial.maoJogador.length === 2 && estadoInicial.maoDealer.length === 2) {
    console.log("✅ PASSOU: iniciarJogo() - Estado inicial do jogo está correto.");
  }

  // Teste: Jogador pedir carta (hit)
  let estadoHit = Jogo21.jogadorHit(JSON.parse(JSON.stringify(estadoInicial)));
  console.assert(estadoHit.maoJogador.length === 3, "FALHOU: Jogador deve ter 3 cartas após hit");
  if (estadoHit.maoJogador.length === 3) console.log("✅ PASSOU: jogadorHit() - Jogador recebe uma terceira carta.");

  // Teste: Turno do dealer
  let estadoDealer = Jogo21.dealerTurn(JSON.parse(JSON.stringify(estadoInicial)));
  console.assert(estadoDealer.status !== 'jogando', "FALHOU: Após dealerTurn, status não deve ser 'jogando'");
  if (estadoDealer.status !== 'jogando') console.log("✅ PASSOU: dealerTurn() - O status do jogo muda após o turno do dealer.");

  // Teste: Verificação de vencedor
  let estadoVencedor = Jogo21.verificarVencedor({
      maoJogador: [{face:'K'}, {face:'Q'}], // 20 pontos
      maoDealer: [{face:'K'}, {face:'9'}]   // 19 pontos
  });
  console.assert(estadoVencedor.status === 'vitoria', "FALHOU: Status deveria ser 'vitoria'");
  if (estadoVencedor.status === 'vitoria') console.log("✅ PASSOU: verificarVencedor() - Determina a vitória corretamente.");

  console.log("\n--- Testes do Jogo21 concluídos ---");
})();