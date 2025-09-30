const { expect } = require('chai');
const sinon = require('sinon');

const caixa = require('../src/caixa');
const estoque = require('../src/estoque');
const logger = require('../src/logger');

describe('Caixa - Testes Unitários', () => {
  it('deve calcular o total corretamente', () => {
    // TODO
  });

  it('deve lançar erro para venda inválida', () => {
    // TODO
  });
});

describe('Caixa - Testes com Stub', () => {
  beforeEach(() => {
    sinon.stub(estoque, 'removerDoEstoque');
    sinon.stub(logger, 'log');
    sinon.stub(logger, 'error');
  });

  afterEach(() => sinon.restore());

  it('deve chamar removerDoEstoque para cada item da venda', () => {
    // TODO
  });

  it('deve chamar logger.log após venda', () => {
    // TODO
  });

  it('deve chamar logger.error para venda inválida', () => {
    // TODO
  });
});
