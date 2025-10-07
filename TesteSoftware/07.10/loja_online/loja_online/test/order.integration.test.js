const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Testes de Integração - Pedidos', () => {

  it('Deve criar pedido com produto válido e quantidade válida', async () => {
    // TODO:
    // 1. Criar um produto via POST /products
    // 2. Criar pedido POST /orders com productId do produto criado e quantidade > 0
    // 3. Verificar status 201 e dados corretos
  });

  it('Deve listar pedidos cadastrados', async () => {
    // TODO:
    // GET /orders
    // Verificar status 200
    // Verificar resposta é array
    // Verificar que pedido criado está na lista
  });

  it('Deve retornar erro ao criar pedido com quantidade inválida', async () => {
    // TODO:
    // POST /orders com quantity <= 0
    // Verificar status 400
    // Verificar mensagem de erro apropriada
  });

  it('Deve retornar erro ao criar pedido com productId inválido', async () => {
    // TODO:
    // POST /orders com productId que não existe
    // Verificar status 400
    // Verificar mensagem de erro apropriada
  });

});
