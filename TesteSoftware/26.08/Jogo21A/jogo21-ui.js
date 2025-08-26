// jogo21-ui.js - Controle da interface do Jogo21

let estadoJogo = null;

// Elementos da DOM
const maoJogadorEl = document.getElementById('mao-jogador');
const maoDealerEl = document.getElementById('mao-dealer');
const pontosJogadorEl = document.getElementById('pontos-jogador');
const pontosDealerEl = document.getElementById('pontos-dealer');
const dealerHitCountEl = document.getElementById('dealer-hit-count'); // Novo elemento
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

function atualizarInterface() {
  // Limpa as mãos
  maoJogadorEl.innerHTML = '';
  maoDealerEl.innerHTML = '';

  // Renderiza a mão do jogador
  estadoJogo.maoJogador.forEach(carta => {
    maoJogadorEl.appendChild(criarCartaElemento(carta));
  });

  // Lógica para renderizar a mão do dealer
  if (estadoJogo.status === 'jogando') {
    // No turno do jogador, a primeira carta do dealer é visível e as outras ocultas
    maoDealerEl.appendChild(criarCartaElemento(estadoJogo.maoDealer[0]));
    for (let i = 1; i < estadoJogo.maoDealer.length; i++) {
      const cartaOculta = document.createElement('div');
      cartaOculta.className = 'carta oculta';
      cartaOculta.textContent = ' ';
      maoDealerEl.appendChild(cartaOculta);
    }
  } else {
    // No final do jogo, todas as cartas do dealer são reveladas
    estadoJogo.maoDealer.forEach(carta => {
      maoDealerEl.appendChild(criarCartaElemento(carta));
    });
  }

  // Atualiza a contagem de pontos
  pontosJogadorEl.textContent = Jogo21.calcularPontos(estadoJogo.maoJogador);
  pontosDealerEl.textContent = estadoJogo.status === 'jogando' ? '?' : Jogo21.calcularPontos(estadoJogo.maoDealer);

  // Atualiza o contador de cartas do dealer
  dealerHitCountEl.textContent = estadoJogo.dealerPegouCartas;

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

// Evento do botão "Pedir Carta"
btnHit.addEventListener('click', () => {
  estadoJogo = Jogo21.jogadorHit(estadoJogo);
  atualizarInterface();
});

// Evento do botão "Parar"
btnStand.addEventListener('click', () => {
  // Desabilita os botões do jogador imediatamente para mostrar que o turno dele acabou
  btnHit.disabled = true;
  btnStand.disabled = true;
  statusEl.textContent = 'Dealer está jogando...';

  // Executa o turno do dealer e atualiza a interface após um pequeno atraso para efeito visual
  setTimeout(() => {
    estadoJogo = Jogo21.dealerTurn(estadoJogo);
    atualizarInterface();
  }, 1000); // 1 segundo de atraso
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