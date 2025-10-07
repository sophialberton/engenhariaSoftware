const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Testes de Integração - Produtos', () => {

  it('Deve criar um produto com dados válidos', async () => {
    // TODO: POST /products com nome e preço válidos
    // Verificar status 201
    // Verificar resposta contém nome e preço corretos
  });

  it('Deve listar produtos cadastrados', async () => {
    // TODO: GET /products
    // Verificar status 200
    // Verificar resposta é array
    // Verificar ao menos 1 produto existe
  });

  it('Deve retornar erro ao criar produto com preço negativo', async () => {
    // TODO: POST /products com preço negativo
    // Verificar status 400
    // Verificar mensagem de erro apropriada
  });

});
