// jogo21.test.js - Testes unitários do Jogo21 (versão com a correção definitiva)

(() => {
  let totalTestes = 0;
  let testesPassaram = 0;

  function describe(descricao, fn) {
    console.log(`%c--- ${descricao} ---`, 'font-weight: bold; font-size: 14px; color: #1E90FF;');
    fn();
  }

  function it(mensagem, fn) {
    totalTestes++;
    try {
      fn();
      console.log(`%c  ✓ ${mensagem}`, 'color: #32CD32;');
      testesPassaram++;
    } catch (error) {
      console.error(`%c  ✗ ${mensagem}`, 'color: #DC143C;');
      console.error(error);
    }
  }

  function assertEqual(atual, esperado, mensagemErro) {
    if (JSON.stringify(atual) !== JSON.stringify(esperado)) {
      throw new Error(mensagemErro || `Esperado: ${JSON.stringify(esperado)}, mas Recebido: ${JSON.stringify(atual)}`);
    }
  }

  console.log('%c🚀 Iniciando suíte de testes do Jogo21...', 'font-weight: bold; font-size: 16px;');

  describe('Funções Puras e Utilitárias', () => {
    it('deve criar um baralho com 52 cartas', () => {
      assertEqual(Jogo21.criarBaralho().length, 52);
    });

    it('deve calcular pontos corretamente (A+9=20)', () => {
      assertEqual(Jogo21.calcularPontos([{face:'A'}, {face:'9'}]), 20);
    });

    it('deve tratar o Ás como 1 para evitar estourar (A+9+5=15)', () => {
      assertEqual(Jogo21.calcularPontos([{face:'A'}, {face:'9'}, {face:'5'}]), 15);
    });
  });

  describe('Lógica e Fluxo do Jogo', () => {
    
    it('deve distribuir as cartas iniciais corretamente', () => {
      const baralho = [
          {face:'6', naipe:'♥'},
          {face:'A', naipe:'♠'},
          {face:'5', naipe:'♦'},
          {face:'K', naipe:'♣'},
      ].reverse();
      
      const estado = Jogo21.iniciarJogo(baralho);
      
      // CORREÇÃO APLICADA: A ordem esperada agora é [6, A], que é a ordem correta de recebimento.
      assertEqual(estado.maoJogador, [{face:'6', naipe:'♥'}, {face:'A', naipe:'♠'}]);
      assertEqual(Jogo21.calcularPontos(estado.maoJogador), 17);

      assertEqual(estado.maoDealer, [{face:'K', naipe:'♣'}, {face:'5', naipe:'♦'}]);
      assertEqual(Jogo21.calcularPontos(estado.maoDealer), 15);
    });

    it('deve permitir que o jogador peça uma carta (hit)', () => {
      const baralho = [
          {face:'6', naipe:'♥'}, {face:'A', naipe:'♠'}, {face:'5', naipe:'♦'}, {face:'K', naipe:'♣'},
          {face:'J', naipe:'♦'},
      ].reverse();

      let estado = Jogo21.iniciarJogo(baralho);
      estado = Jogo21.jogadorHit(estado);

      assertEqual(estado.maoJogador.length, 3);
      assertEqual(Jogo21.calcularPontos(estado.maoJogador), 17);
    });

    it('deve declarar derrota se o jogador estourar', () => {
      const baralho = [ {face:'J'} ].reverse();
      let estado = { baralho, maoJogador: [{face:'K'}, {face:'Q'}], status: 'jogando' };
      estado = Jogo21.jogadorHit(estado);
      
      assertEqual(Jogo21.calcularPontos(estado.maoJogador), 30);
      assertEqual(estado.status, 'derrota');
    });

    it('deve executar o turno do dealer corretamente (comprar até 17+)', () => {
        const baralho = [
            {face:'6', naipe:'♥'}, {face:'A', naipe:'♠'}, {face:'5', naipe:'♦'}, {face:'K', naipe:'♣'},
            {face:'8', naipe:'♣'},
        ].reverse();
        
        let estado = Jogo21.iniciarJogo(baralho);
        estado = Jogo21.dealerTurn(estado);

        assertEqual(estado.maoDealer.length, 3, "Dealer deveria ter comprado uma carta");
        assertEqual(Jogo21.calcularPontos(estado.maoDealer), 23);
        assertEqual(estado.status, 'vitoria', "Jogador vence porque o dealer estourou");
    });
  });

  console.log(`\n%c--- Resumo dos Testes ---`, 'font-weight: bold; font-size: 14px; color: #1E90FF;');
  const corResumo = testesPassaram === totalTestes ? '#32CD32' : '#DC143C';
  console.log(`%cPassaram: ${testesPassaram} de ${totalTestes}`, `color: ${corResumo}; font-weight: bold;`);
})();