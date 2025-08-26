// jogo21-ui.js - Controle da interface do Jogo21

let estadoJogo = null;

const maoJogadorEl = document.getElementById('mao-jogador');
const maoDealerEl = document.getElementById('mao-dealer');
const pontosJogadorEl = document.getElementById('pontos-jogador');
const pontosDealerEl = document.getElementById('pontos-dealer');
const statusEl = document.getElementById('status');
const btnHit = document.getElementById('btn-hit');
const btnStand = document.getElementById('btn-stand');
const btnNovo = document.getElementById('btn-novo');

function criarCartaElemento(carta) {
  const div = document.createElement('div');
  div.className = 'carta';
  div.textContent = carta.face + carta.naipe;
  return div;
}

function atualizarInterface() {
  // Mostrar cartas do jogador
  maoJogadorEl.innerHTML = '';
  estadoJogo.maoJogador.forEach(carta => {
    maoJogadorEl.appendChild(criarCartaElemento(carta));
  });

  // Mostrar cartas do dealer (se jogo em andamento, só mostra a primeira carta)
  maoDealerEl.innerHTML = '';
  if (estadoJogo.status === 'jogando') {
    // Mostra só a primeira carta visível, as outras escondidas
    maoDealerEl.appendChild(criarCartaElemento(estadoJogo.maoDealer[0]));
    for (let i = 1; i < estadoJogo.maoDealer.length; i++) {
      const cartaOculta = document.createElement('div');
      cartaOculta.className = 'carta';
      cartaOculta.textContent = '❓';
      maoDealerEl.appendChild(cartaOculta);
    }
  } else {
    // Jogo terminou, mostra todas as cartas do dealer
    estadoJogo.maoDealer.forEach(carta => {
      maoDealerEl.appendChild(criarCartaElemento(carta));
    });
  }

  // Atualiza pontos
  pontosJogadorEl.textContent = Jogo21.calcularPontos(estadoJogo.maoJogador);
  pontosDealerEl.textContent = estadoJogo.status === 'jogando' ? '?' : Jogo21.calcularPontos(estadoJogo.maoDealer);

  // Atualiza status
  switch (estadoJogo.status) {
    case 'jogando':
      statusEl.textContent = 'Sua vez! Escolha: Pedir Carta ou Parar.';
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

  if (estadoJogo.status === 'derrota') {
    // Se estourou 21, jogo acaba
    atualizarInterface();
  }
});

// Evento do botão "Parar"
btnStand.addEventListener('click', () => {
  estadoJogo = Jogo21.dealerTurn(estadoJogo);
  atualizarInterface();
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
