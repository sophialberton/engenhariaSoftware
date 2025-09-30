const { expect } = require('chai');
const sinon = require('sinon');

const caixa = require('../src/caixa');
const estoque = require('../src/estoque');
const logger = require('../src/logger');

describe('Caixa - Testes Unitários', () => {
  it('deve calcular o total corretamente', () => {
    const venda = [
      { produto: 'pao', preco: 0.5, quantidade: 10 },    // Total: 5.0
      { produto: 'leite', preco: 4.0, quantidade: 2 },   // Total: 8.0
      { produto: 'cafe', preco: 15.0, quantidade: 1 }    // Total: 15.0
    ];
    // O total esperado é 5.0 + 8.0 + 15.0 = 28.0
    const total = caixa.calcularTotal(venda);
    expect(total).to.equal(28.0);
  });

  it('deve lançar erro para venda inválida', () => {
    const vendaVazia = () => caixa.registrarVenda([]);
    expect(vendaVazia).to.throw('Venda inválida');

    const vendaNaoArray = () => caixa.registrarVenda('nao-e-array');
    expect(vendaNaoArray).to.throw('Venda inválida');

    const vendaNula = () => caixa.registrarVenda(null);
    expect(vendaNula).to.throw('Venda inválida');
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
    const venda = [
      { produto: 'pao', quantidade: 2 },
      { produto: 'leite', quantidade: 1 }
    ];
    caixa.registrarVenda(venda);

    expect(estoque.removerDoEstoque.callCount).to.equal(2);
    expect(estoque.removerDoEstoque.getCall(0).calledWith('pao', 2)).to.be.true;
    expect(estoque.removerDoEstoque.getCall(1).calledWith('leite', 1)).to.be.true;
  });

  it('deve chamar logger.log após venda', () => {
    const venda = [{ produto: 'cafe', preco: 15.0, quantidade: 1 }];
    caixa.registrarVenda(venda);

    // Verificamos se logger.log foi chamado uma vez
    expect(logger.log.calledOnce).to.be.true;
    // Verificamos a mensagem exata do log
    expect(logger.log.calledWith('Venda registrada. Total: R$ 15.00')).to.be.true;
  });

  it('deve chamar logger.error para venda inválida', () => {
    try {
      caixa.registrarVenda([]);
    } catch (e) {
      // O erro é esperado, o teste continua
    }
    expect(logger.error.calledOnce).to.be.true;
    expect(logger.error.calledWith('Venda inválida')).to.be.true;
  });
});