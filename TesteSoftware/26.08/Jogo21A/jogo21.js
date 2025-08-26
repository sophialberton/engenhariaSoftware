// jogo21.js - Lógica do Jogo21 (Versão Corrigida e Testável)

const Jogo21 = (() => {
  const valoresCartas = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': 11
  };
  const naipes = ['♠', '♥', '♦', '♣'];
  const faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const PONTUACAO_DEALER_MINIMA = 17;
  const PONTUACAO_MAXIMA = 21;

  function criarBaralho() {
    return naipes.flatMap(naipe => faces.map(face => ({ face, naipe })));
  }

  function embaralhar(baralho) {
    const baralhoEmbaralhado = [...baralho];
    for (let i = baralhoEmbaralhado.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baralhoEmbaralhado[i], baralhoEmbaralhado[j]] = [baralhoEmbaralhado[j], baralhoEmbaralhado[i]];
    }
    return baralhoEmbaralhado;
  }

  function calcularPontos(mao) {
    let pontos = mao.reduce((soma, carta) => soma + valoresCartas[carta.face], 0);
    let ases = mao.filter(carta => carta.face === 'A').length;
    while (pontos > PONTUACAO_MAXIMA && ases > 0) {
      pontos -= 10;
      ases--;
    }
    return pontos;
  }

  // Modificado para aceitar um baralho, essencial para testes
  function iniciarJogo(baralhoFornecido) {
    const baralho = baralhoFornecido || embaralhar(criarBaralho());
    const maoJogador = [baralho.pop(), baralho.pop()];
    const maoDealer = [baralho.pop(), baralho.pop()];
    
    return {
      baralho,
      maoJogador,
      maoDealer,
      status: 'jogando',
      dealerPegouCartas: 0
    };
  }

  function jogadorHit(estado) {
    if (estado.status !== 'jogando') return estado;
    const novoEstado = JSON.parse(JSON.stringify(estado));
    novoEstado.maoJogador.push(novoEstado.baralho.pop());
    if (calcularPontos(novoEstado.maoJogador) > PONTUACAO_MAXIMA) {
      novoEstado.status = 'derrota';
    }
    return novoEstado;
  }
  
  function dealerTurn(estado) {
    if (estado.status !== 'jogando') return estado;
    const novoEstado = JSON.parse(JSON.stringify(estado));
    let pontosDealer = calcularPontos(novoEstado.maoDealer);
    
    while (pontosDealer < PONTUACAO_DEALER_MINIMA) {
      novoEstado.maoDealer.push(novoEstado.baralho.pop());
      pontosDealer = calcularPontos(novoEstado.maoDealer);
      novoEstado.dealerPegouCartas++;
    }
    
    return verificarVencedor(novoEstado);
  }

  function verificarVencedor(estado) {
    const novoEstado = JSON.parse(JSON.stringify(estado));
    const pontosJogador = calcularPontos(novoEstado.maoJogador);
    const pontosDealer = calcularPontos(novoEstado.maoDealer);

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

  return {
    criarBaralho,
    embaralhar,
    calcularPontos,
    iniciarJogo,
    jogadorHit,
    dealerTurn,
    verificarVencedor
  };
})();