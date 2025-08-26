// jogo21.js - Lógica do Jogo21 (Versão Melhorada)

const Jogo21 = (() => {
  // Constantes do jogo
  const valoresCartas = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': 11
  };
  const naipes = ['♠', '♥', '♦', '♣'];
  const faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const PONTUACAO_DEALER_MINIMA = 17;
  const PONTUACAO_MAXIMA = 21;

  /**
   * Cria um baralho padrão de 52 cartas.
   * @returns {Array} O baralho de cartas.
   */
  function criarBaralho() {
    return naipes.flatMap(naipe => faces.map(face => ({ face, naipe })));
  }

  /**
   * Embaralha um baralho usando o algoritmo Fisher-Yates.
   * @param {Array} baralho - O baralho a ser embaralhado.
   * @returns {Array} O baralho embaralhado.
   */
  function embaralhar(baralho) {
    const baralhoEmbaralhado = [...baralho];
    for (let i = baralhoEmbaralhado.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baralhoEmbaralhado[i], baralhoEmbaralhado[j]] = [baralhoEmbaralhado[j], baralhoEmbaralhado[i]];
    }
    return baralhoEmbaralhado;
  }

  /**
   * Calcula a pontuação de uma mão, tratando o Ás como 1 ou 11.
   * @param {Array} mao - A mão de cartas.
   * @returns {number} A pontuação calculada.
   */
  function calcularPontos(mao) {
    let pontos = mao.reduce((soma, carta) => soma + valoresCartas[carta.face], 0);
    let ases = mao.filter(carta => carta.face === 'A').length;
    while (pontos > PONTUACAO_MAXIMA && ases > 0) {
      pontos -= 10;
      ases--;
    }
    return pontos;
  }

  /**
   * Inicializa um novo jogo. Pode receber um baralho para fins de teste.
   * @param {Array} [baralhoFornecido] - Um baralho opcional para usar no jogo.
   * @returns {object} O estado inicial do jogo.
   */
  function iniciarJogo(baralhoFornecido) {
    const baralho = baralhoFornecido || embaralhar(criarBaralho());
    const maoJogador = [baralho.pop(), baralho.pop()];
    const maoDealer = [baralho.pop(), baralho.pop()];
    
    return {
      baralho,
      maoJogador,
      maoDealer,
      pontosJogador: calcularPontos(maoJogador),
      pontosDealer: calcularPontos(maoDealer),
      status: 'jogando' // 'jogando', 'vitoria', 'derrota', 'empate'
    };
  }

  /**
   * O jogador recebe uma nova carta.
   * @param {object} estado - O estado atual do jogo.
   * @returns {object} O novo estado do jogo.
   */
  function jogadorHit(estado) {
    if (estado.status !== 'jogando') return estado;

    const novoEstado = JSON.parse(JSON.stringify(estado));
    novoEstado.maoJogador.push(novoEstado.baralho.pop());
    novoEstado.pontosJogador = calcularPontos(novoEstado.maoJogador);

    if (novoEstado.pontosJogador > PONTUACAO_MAXIMA) {
      novoEstado.status = 'derrota';
    }

    return novoEstado;
  }
  
  /**
   * Executa a jogada do dealer e determina o vencedor.
   * Esta função é chamada quando o jogador decide "parar" (stand).
   * @param {object} estado - O estado atual do jogo.
   * @returns {object} O estado final do jogo.
   */
  function dealerTurn(estado) {
    if (estado.status !== 'jogando') return estado;

    const novoEstado = JSON.parse(JSON.stringify(estado));
    
    // Dealer compra cartas até atingir a pontuação mínima
    while (novoEstado.pontosDealer < PONTUACAO_DEALER_MINIMA) {
      novoEstado.maoDealer.push(novoEstado.baralho.pop());
      novoEstado.pontosDealer = calcularPontos(novoEstado.maoDealer);
    }

    return verificarVencedor(novoEstado);
  }

  /**
   * Compara as pontuações e determina o resultado final.
   * @param {object} estado - O estado do jogo após o turno do dealer.
   * @returns {object} O estado com o status final ('vitoria', 'derrota', 'empate').
   */
  function verificarVencedor(estado) {
     const novoEstado = JSON.parse(JSON.stringify(estado));
     const { pontosJogador, pontosDealer } = novoEstado;

    if (pontosJogador > PONTUACAO_MAXIMA) {
        novoEstado.status = 'derrota';
    } else if (pontosDealer > PONTUACAO_MAXIMA) {
        novoEstado.status = 'vitoria';
    } else if (pontosJogador > pontosDealer) {
        novoEstado.status = 'vitoria';
    } else if (pontosDealer > pontosJogador) {
        novoEstado.status = 'derrota';
    } else {
        novoEstado.status = 'empate';
    }
    return novoEstado;
  }

  // Funções expostas para serem usadas pela UI e testes
  return {
    criarBaralho,
    embaralhar,
    calcularPontos,
    iniciarJogo,
    jogadorHit,
    dealerTurn,
    verificarVencedor // Expor para testes mais granulares se necessário
  };
})();