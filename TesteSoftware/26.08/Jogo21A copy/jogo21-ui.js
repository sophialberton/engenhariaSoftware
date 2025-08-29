// jogo21-ui.js - Controle da interface do Jogo21

let estadoJogo = null;

// Elementos da DOM
const maoJogadorEl = document.getElementById('mao-jogador');
const maoDealerEl = document.getElementById('mao-dealer');
const pontosJogadorEl = document.getElementById('pontos-jogador');
const pontosDealerEl = document.getElementById('pontos-dealer');
// A linha abaixo busca por um elemento que pode não existir.
const dealerHitCountEl = document.getElementById('dealer-hit-count');
const statusEl = document.getElementById('status');
const btnHit = document.getElementById('btn-hit');
const btnStand = document.getElementById('btn-stand');
const btnNovo = document.getElementById('btn-novo');

function criarCartaElemento(carta) {
  const div = document.createElement('div');
  div.className = 'carta';
  // Adiciona classes para naipes de cores diferentes
  if (['♥', '♦'].includes(carta.naipe)) {
    div.classList.add('vermelha');
  }
  div.textContent = carta.face + carta.naipe;
  return div;
}

function atualizarInterface(revelarCartasDealer = false) {
  // Limpa as mãos
  maoJogadorEl.innerHTML = '';
  maoDealerEl.innerHTML = '';

  // Renderiza a mão do jogador
  estadoJogo.maoJogador.forEach(carta => {
    maoJogadorEl.appendChild(criarCartaElemento(carta));
  });

  // Lógica para renderizar a mão do dealer
  if (estadoJogo.status === 'jogando' && !revelarCartasDealer) {
    // No turno do jogador, a primeira carta do dealer é visível e as outras ocultas
    maoDealerEl.appendChild(criarCartaElemento(estadoJogo.maoDealer[0]));
    for (let i = 1; i < estadoJogo.maoDealer.length; i++) {
      const cartaOculta = document.createElement('div');
      cartaOculta.className = 'carta oculta';
      cartaOculta.textContent = ' ';
      maoDealerEl.appendChild(cartaOculta);
    }
  } else {
    // No final do jogo ou durante o turno do dealer, todas as cartas são reveladas
    estadoJogo.maoDealer.forEach(carta => {
      maoDealerEl.appendChild(criarCartaElemento(carta));
    });
  }

  // Atualiza a contagem de pontos
  pontosJogadorEl.textContent = Jogo21.calcularPontos(estadoJogo.maoJogador);
  pontosDealerEl.textContent = (estadoJogo.status === 'jogando' && !revelarCartasDealer) ? '?' : Jogo21.calcularPontos(estadoJogo.maoDealer);

  // *** CORREÇÃO APLICADA AQUI ***
  // Atualiza o contador de cartas do dealer, se o elemento existir
  if (dealerHitCountEl) {
    dealerHitCountEl.textContent = estadoJogo.dealerPegouCartas;
  }

  // Atualiza o status do jogo e o estado dos botões
  switch (estadoJogo.status) {
    case 'jogando':
      statusEl.textContent = 'Sua vez! Escolha uma ação.';
      btnHit.disabled = false;
      btnStand.disabled = false;
      break;
    case 'vitoria':
      statusEl.textContent = '🎉 Você venceu!';
      btnHit.disabled = true;
      btnStand.disabled = true;
      break;
    case 'derrota':
      statusEl.textContent = '💥 Você perdeu!';
      btnHit.disabled = true;
      btnStand.disabled = true;
      break;
    case 'empate':
      statusEl.textContent = '🤝 Empate!';
      btnHit.disabled = true;
      btnStand.disabled = true;
      break;
  }
}

// *** NOVA FUNÇÃO PARA O TURNO ANIMADO DO DEALER ***
function executarTurnoDealerAnimado() {
  // Revela as cartas iniciais do dealer
  atualizarInterface(true);

  const pontosDealer = Jogo21.calcularPontos(estadoJogo.maoDealer);

  // Se o dealer tem menos de 17 pontos, ele pega uma carta
  if (pontosDealer < 17) {
    setTimeout(() => {
      estadoJogo.maoDealer.push(estadoJogo.baralho.pop());
      estadoJogo.dealerPegouCartas++;
      // Chama a função novamente para a próxima carta ou para finalizar
      executarTurnoDealerAnimado();
    }, 800); // Atraso de 800ms para cada carta
  } else {
    // Se o dealer tem 17 ou mais, finaliza o jogo
    setTimeout(() => {
      estadoJogo = Jogo21.verificarVencedor(estadoJogo);
      atualizarInterface(true); // Atualiza a UI com o resultado final
    }, 500);
  }
}

// Evento do botão "Pedir Carta"
btnHit.addEventListener('click', () => {
  estadoJogo = Jogo21.jogadorHit(estadoJogo);
  atualizarInterface();
});

// Evento do botão "Parar" - MODIFICADO
btnStand.addEventListener('click', () => {
  // Desabilita os botões do jogador imediatamente
  btnHit.disabled = true;
  btnStand.disabled = true;
  statusEl.textContent = 'Dealer está jogando...';

  // Inicia a sequência animada do turno do dealer
  executarTurnoDealerAnimado();
});

// Evento do botão "Novo Jogo"
btnNovo.addEventListener('click', () => {
  estadoJogo = Jogo21.iniciarJogo();
  atualizarInterface();
});

// Inicializa o jogo quando a página carrega
window.onload = () => {
  estadoJogo = Jogo21.iniciarJogo();
  atualizarInterface();
};