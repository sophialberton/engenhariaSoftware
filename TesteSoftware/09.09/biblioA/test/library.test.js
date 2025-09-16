// test/library.test.js

const test = require('node:test');
const assert = require('assert');
const biblioteca = require('../src/library.js');

// Limpa a biblioteca antes de cada teste
test.beforeEach(() => {
  biblioteca.resetarBiblioteca();
});

test('Adicionar e listar livros', () => {
  const livro1 = { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien' };
  const livro2 = { titulo: '1984', autor: 'George Orwell' };

  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);

  const lista = biblioteca.listarLivros();
  assert.strictEqual(lista.length, 2, 'A biblioteca deve ter 2 livros');
  assert.deepStrictEqual(lista, [livro1, livro2], 'A lista de livros deve ser a esperada');
});

test('Buscar livro por título', () => {
  const livro = { titulo: 'A Revolução dos Bichos', autor: 'George Orwell' };
  biblioteca.adicionarLivro(livro);

  const encontrado = biblioteca.buscarLivroPorTitulo('A Revolução dos Bichos');
  assert.deepStrictEqual(encontrado, livro, 'Deve encontrar o livro pelo título');

  const naoEncontrado = biblioteca.buscarLivroPorTitulo('Livro Inexistente');
  assert.strictEqual(naoEncontrado, undefined, 'Deve retornar undefined para livro inexistente');
});

test('Remover livro', () => {
  const livro1 = { titulo: 'O Sol é para todos', autor: 'Harper Lee' };
  const livro2 = { titulo: 'O Apanhador no Campo de Centeio', autor: 'J.D. Salinger' };
  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);

  biblioteca.removerLivro('O Sol é para todos');

  const lista = biblioteca.listarLivros();
  assert.strictEqual(lista.length, 1, 'A biblioteca deve ter 1 livro após a remoção');
  assert.deepStrictEqual(lista[0], livro2, 'O livro remanescente deve ser o correto');

  const livroRemovido = biblioteca.buscarLivroPorTitulo('O Sol é para todos');
  assert.strictEqual(livroRemovido, undefined, 'O livro removido não deve ser encontrado');
});

test('Não permitir adicionar livro duplicado', () => {
  const livro = { titulo: 'Fahrenheit 451', autor: 'Ray Bradbury' };
  biblioteca.adicionarLivro(livro);
  biblioteca.adicionarLivro({ titulo: 'Fahrenheit 451', autor: 'Ray Bradbury' }); // Tentativa de adicionar duplicado

  const lista = biblioteca.listarLivros();
  assert.strictEqual(lista.length, 1, 'Não deve ser possível adicionar um livro com título duplicado');
});