// jogo21.test.js - Testes unitários do Jogo21 (esqueleto para alunos preencherem)

(() => {
  console.log("Iniciando testes do Jogo21...");

  // TODO: Criar um baralho e testar seu tamanho
  const baralho = Jogo21.criarBaralho();
  // console.assert(..., "TODO: Verificar se o baralho tem 52 cartas");

  // TODO: Embaralhar o baralho e testar tamanho
  const baralhoEmbaralhado = Jogo21.embaralhar([...baralho]);
  // console.assert(..., "TODO: Verificar se o baralho embaralhado tem 52 cartas");

  // TODO: Testar cálculo de pontos com cartas simples
  let mao = [{face:'2', naipe:'♠'}, {face:'3', naipe:'♥'}];
  // console.assert(..., "TODO: Verificar pontos de 2 + 3");

  // TODO: Testar cálculo de pontos com Ás valendo 11
  mao = [{face:'A', naipe:'♠'}, {face:'9', naipe:'♦'}];
  // console.assert(..., "TODO: Verificar pontos com Ás como 11 + 9");

  // TODO: Testar cálculo de pontos com Ás valendo 1
  mao = [{face:'A', naipe:'♠'}, {face:'9', naipe:'♦'}, {face:'5', naipe:'♥'}];
  // console.assert(..., "TODO: Verificar pontos com Ás como 1 + 9 + 5");

  // TODO: Testar iniciar jogo - verificar tamanho do baralho e mãos do jogador e dealer
  const estado = Jogo21.iniciarJogo();
  // console.assert(..., "TODO: Verificar baralho reduzido após iniciar jogo");
  // console.assert(..., "TODO: Jogador começa com 2 cartas");
  // console.assert(..., "TODO: Dealer começa com 2 cartas");

  // TODO: Testar jogador pedir carta (hit)
  let estadoHit = Jogo21.jogadorHit({...estado, baralho: [...estado.baralho], maoJogador: [...estado.maoJogador]});
  // console.assert(..., "TODO: Jogador deve ter mais cartas após hit");

  // TODO: Testar turno do dealer
  let estadoDealer = Jogo21.dealerTurn({...estado, baralho: [...estado.baralho], maoDealer: [...estado.maoDealer], status: 'jogando'});
  // console.assert(..., "TODO: Após dealerTurn, status deve ser atualizado");

  // TODO: Testar verificação de vencedor
  // console.assert(..., "TODO: Status deve ser um dos: vitoria, derrota, empate");

  console.log("✅ Todos os testes do Jogo21 passaram (quando completos).");
})();
