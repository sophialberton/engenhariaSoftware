const { expect } = require('chai');
const sinon = require('sinon');

const estoque = require('../src/estoque');
const logger = require('../src/logger');

describe('Estoque - Testes Unitários', () => {

  let estadoOriginalEstoque;

  beforeEach(() => {
    estadoOriginalEstoque = JSON.parse(JSON.stringify(estoque._estoqueInterno));
  });

  afterEach(() => {
    Object.keys(estoque._estoqueInterno).forEach(key => delete estoque._estoqueInterno[key]);
    Object.assign(estoque._estoqueInterno, estadoOriginalEstoque);
    sinon.restore();
  });


  it('deve retornar quantidade correta em consultarEstoque', () => {
    expect(estoque.consultarEstoque('pao')).to.equal(100);
    expect(estoque.consultarEstoque('manteiga')).to.equal(0);
  });

  it('deve adicionar itens ao estoque', () => {
    estoque.adicionarAoEstoque('leite', 10);
    expect(estoque.consultarEstoque('leite')).to.equal(60);
  });

  it('deve lançar erro ao adicionar quantidade inválida', () => {
    expect(() => estoque.adicionarAoEstoque('cafe', 0)).to.throw('Quantidade deve ser maior que zero');
    expect(() => estoque.adicionarAoEstoque('cafe', -5)).to.throw('Quantidade deve ser maior que zero');
  });

  it('deve remover itens do estoque', () => {
    estoque.removerDoEstoque('pao', 20);
    expect(estoque.consultarEstoque('pao')).to.equal(80);
  });

  it('deve lançar erro ao remover mais do que o disponível', () => {
    expect(() => estoque.removerDoEstoque('cafe', 31)).to.throw('Estoque insuficiente');
  });
});

describe('Estoque - Testes com Stub (Logger)', () => {
  beforeEach(() => {
    sinon.stub(logger, 'log');
    sinon.stub(logger, 'error');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('deve chamar logger.log ao adicionar item ao estoque', () => {
    estoque.adicionarAoEstoque('pao', 10);
    expect(logger.log.calledOnce).to.be.true;
    expect(logger.log.calledWith('Adicionado 10 unidades de pao ao estoque')).to.be.true;
  });

  it('deve chamar logger.error ao tentar adicionar quantidade inválida', () => {
    try {
      estoque.adicionarAoEstoque('leite', 0);
    } catch (e) {
//erro esperado
    }
    expect(logger.error.calledOnce).to.be.true;
    expect(logger.error.calledWith('Quantidade inválida: 0')).to.be.true;
  });
});