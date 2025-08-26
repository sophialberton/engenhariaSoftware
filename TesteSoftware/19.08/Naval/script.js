// ==========================
// Configuração do Jogo
// ==========================
const tamanho = 10; // Tabuleiro agora é 10x10
let tentativas = 0;
let fimDeJogo = false;

// Definição da nossa frota de navios
const frota = [
  { nome: 'Porta-aviões', tamanho: 5 },
  { nome: 'Encouraçado', tamanho: 4 },
  { nome: 'Cruzador', tamanho: 3 },
  { nome: 'Submarino', tamanho: 3 },
  { nome: 'Destroyer', tamanho: 2 },
];

// O array 'navios' vai guardar as informações detalhadas de cada navio posicionado
let navios = [];
let naviosAfundados = 0;

const tabuleiro = document.getElementById("tabuleiro");
const mensagem = document.getElementById("mensagem");

// ==========================
// Geração do Tabuleiro
// ==========================
function gerarTabuleiro() {
  for (let y = 0; y < tamanho; y++) {
    for (let x = 0; x < tamanho; x++) {
      const celula = document.createElement("div");
      celula.classList.add("celula");
      celula.dataset.x = x;
      celula.dataset.y = y;
      celula.addEventListener("click", aoClicarNaCelula);
      tabuleiro.appendChild(celula);
    }
  }
}

// ==========================
// Geração dos Navios (Lógica Clássica)
// ==========================
function gerarNavios() {
  const naviosPosicionados = [];
  let posicoesOcupadas = []; // Guarda todas as células já usadas por outros navios

  // Itera sobre cada tipo de navio na nossa frota
  for (const navioInfo of frota) {
    let posicaoValida = false;
    let novoNavio;

    while (!posicaoValida) {
      const orientacao = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      const xInicial = Math.floor(Math.random() * tamanho);
      const yInicial = Math.floor(Math.random() * tamanho);

      let cabeNoTabuleiro = false;
      if (orientacao === 'horizontal') {
        cabeNoTabuleiro = xInicial + navioInfo.tamanho <= tamanho;
      } else {
        cabeNoTabuleiro = yInicial + navioInfo.tamanho <= tamanho;
      }

      if (cabeNoTabuleiro) {
        let sobreposicao = false;
        const posicoesDoNavio = [];

        // Gera todas as coordenadas que o navio ocuparia
        for (let i = 0; i < navioInfo.tamanho; i++) {
          let x = xInicial;
          let y = yInicial;
          if (orientacao === 'horizontal') {
            x += i;
          } else {
            y += i;
          }
          posicoesDoNavio.push({ x, y });
        }

        // Verifica se alguma dessas coordenadas já está ocupada
        sobreposicao = posicoesDoNavio.some(p =>
          posicoesOcupadas.some(ocupada => ocupada.x === p.x && ocupada.y === p.y)
        );

        if (!sobreposicao) {
          posicaoValida = true;
          novoNavio = {
            ...navioInfo, // Copia nome e tamanho
            posicoes: posicoesDoNavio,
            acertos: [], // Array para registrar os acertos neste navio
          };
          // Adiciona as posições deste navio à lista de posições ocupadas
          posicoesOcupadas.push(...posicoesDoNavio);
        }
      }
    }
    naviosPosicionados.push(novoNavio);
  }
  return naviosPosicionados;
}

// ==============================
// Lógica do Clique
// ==============================
function aoClicarNaCelula(event) {
  if (fimDeJogo) return;

  const celula = event.currentTarget;
  const x = parseInt(celula.dataset.x);
  const y = parseInt(celula.dataset.y);

  if (celula.classList.contains('acertou') || celula.classList.contains('errou')) {
    mensagem.textContent = "Você já atirou aqui!";
    return;
  }
  
  tentativas++;
  let acertou = false;
  let navioAtingido = null;

  // Verifica se o clique acertou algum navio
  for (const navio of navios) {
    const posicaoAtingida = navio.posicoes.find(p => p.x === x && p.y === y);
    if (posicaoAtingida) {
      acertou = true;
      navioAtingido = navio;
      // Adiciona a coordenada exata ao array de acertos do navio
      navio.acertos.push({ x, y });
      break;
    }
  }

  if (acertou) {
    celula.classList.add("acertou");
    celula.textContent = "💥";
    mensagem.textContent = `Acertou um ${navioAtingido.nome}!`;

    // Verifica se o navio foi afundado
    if (navioAtingido.acertos.length === navioAtingido.tamanho) {
      mensagem.textContent = `Você afundou o ${navioAtingido.nome}!`;
      naviosAfundados++;
    }

    // Verifica se todos os navios foram afundados (condição de vitória)
    if (naviosAfundados === frota.length) {
      fimDeJogo = true;
      mensagem.textContent = `VITÓRIA! Você afundou toda a frota em ${tentativas} tentativas!`;
    }
  } else {
    celula.classList.add("errou");
    celula.textContent = "🌊";
    mensagem.textContent = "Água! Tente novamente.";
  }
}

// ==============================
// Início do Jogo
// ==============================
gerarTabuleiro(); // Cria o HTML do tabuleiro
navios = gerarNavios(); // Gera os navios com a nova lógica

// Para fins de teste, você pode descomentar a linha abaixo para ver no console onde estão os navios
// console.log("Posições dos navios (para teste):", navios);