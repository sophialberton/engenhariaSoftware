const tamanho = 5;
const numNavios = 3;
let navios = [];
let acertos = 0;
let fimDeJogo = false;

// Gerar tabuleiro (já implementado)
const tabuleiro = document.getElementById("tabuleiro");
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

// ==========================
// Função para gerar navios
// ==========================
// TODO: Gerar 3 posições aleatórias únicas para os navios
function gerarNavios() {
  const posicoes = [];

  // IMPLEMENTAR: gerar coordenadas únicas até completar numNavios

  return posicoes; // Deve retornar array de objetos {x, y}
}

// Chamada inicial da função (não altere)
navios = gerarNavios();

// ==============================
// Função para tratar cliques
// ==============================
// TODO: Verificar se o clique foi acerto ou erro
// TODO: Marcar visualmente o resultado (💥 ou 🌊)
// TODO: Impedir clique repetido
// TODO: Encerrar jogo ao afundar todos os navios
function aoClicarNaCelula(event) {
  const celula = event.currentTarget;
  const x = parseInt(celula.dataset.x);
  const y = parseInt(celula.dataset.y);

  // IMPLEMENTAR: lógica de verificação de acerto, erro, e finalização
}

// ==============================
// Testes Unitários no Console
// ==============================
// TODO: Testar se gerarNavios funciona corretamente
function testarGeracaoDeNavios() {
  const n = gerarNavios();

  // Teste 1 - quantidade correta
  console.log("Teste 1 - Quantidade correta:", n.length === numNavios);

  // Teste 2 - posições únicas
  const unicos = new Set(n.map(p => `${p.x},${p.y}`));
  console.log("Teste 2 - Sem repetições:", unicos.size === numNavios);

  // Teste 3 - dentro do tabuleiro
  const dentroDosLimites = n.every(p => p.x >= 0 && p.x < tamanho && p.y >= 0 && p.y < tamanho);
  console.log("Teste 3 - Dentro do tabuleiro:", dentroDosLimites);
}

// Descomente para testar
// testarGeracaoDeNavios();
