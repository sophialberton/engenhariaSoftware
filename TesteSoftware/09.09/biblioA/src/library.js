// src/library.js

const livros = [];

/**
 * Adiciona um livro à biblioteca, desde que não exista outro com o mesmo título.
 * @param {object} livro - O objeto do livro a ser adicionado. Ex: { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' }
 */
function adicionarLivro(livro) {
  const livroExistente = buscarLivroPorTitulo(livro.titulo);
  if (!livroExistente) {
    livros.push(livro);
  }
}

/**
 * Busca um livro pelo título.
 * @param {string} titulo - O título do livro a ser buscado.
 * @returns {object|undefined} O objeto do livro encontrado ou undefined se não for encontrado.
 */
function buscarLivroPorTitulo(titulo) {
  return livros.find(livro => livro.titulo === titulo);
}

/**
 * Retorna a lista de todos os livros na biblioteca.
 * @returns {Array<object>} A lista de livros.
 */
function listarLivros() {
  return livros;
}

/**
 * Remove o primeiro livro encontrado com o título especificado.
 * @param {string} titulo - O título do livro a ser removido.
 */
function removerLivro(titulo) {
  const indice = livros.findIndex(livro => livro.titulo === titulo);
  if (indice !== -1) {
    livros.splice(indice, 1);
  }
}

/**
 * Limpa completamente a lista de livros.
 */
function resetarBiblioteca() {
  livros.length = 0; // Limpa a lista
}

module.exports = {
  adicionarLivro,
  buscarLivroPorTitulo,
  listarLivros,
  removerLivro,
  resetarBiblioteca
};