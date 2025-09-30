const { expect } = require('chai');
const sinon = require('sinon');

const estoque = require('../src/estoque');
const logger = require('../src/logger');

describe('Estoque - Testes Unitários', () => {
  afterEach(() => sinon.restore());

  it('deve retornar quantidade correta em consultarEstoque', () => {
    // TODO
  });

  it('deve adicionar itens ao estoque', () => {
    // TODO
  });

  it('deve lançar erro ao adicionar quantidade inválida', () => {
    // TODO
  });

  it('deve remover itens do estoque', () => {
    // TODO
  });

  it('deve lançar erro ao remover mais do que o disponível', () => {
    // TODO
  });
});

describe('Estoque - Testes com Stub (Logger)', () => {
  beforeEach(() => sinon.stub(logger, 'log'));
  afterEach(() => sinon.restore());

  it('deve chamar logger.log ao adicionar item ao estoque', () => {
    // TODO
  });

  it('deve chamar logger.error ao tentar adicionar quantidade inválida', () => {
    // TODO
  });
});
