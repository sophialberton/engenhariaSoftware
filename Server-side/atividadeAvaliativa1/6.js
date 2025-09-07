const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nomes = [];
const totalNomesParaCadastrar = 10;

function cadastrarNomes() {
  if (nomes.length < totalNomesParaCadastrar) {
    rl.question(`Digite o ${nomes.length + 1}º nome: `, (nome) => {
      nomes.push(nome);
      cadastrarNomes(); // Chama a função recursivamente para o próximo nome
    });
  } else {
    console.log('\n--- Cadastro concluído! ---');
    console.log('Nomes armazenados:', nomes.join(', '));
    iniciarBusca();
  }
}

function iniciarBusca() {
  rl.question('\nDigite um nome para buscar (ou "sair" para encerrar): ', (nomeBusca) => {
    if (nomeBusca.toLowerCase() === 'sair') {
      console.log('Encerrando o programa.');
      rl.close();
      return;
    }

    // O método .includes() é uma forma eficiente de verificar se o array contém o valor
    if (nomes.includes(nomeBusca)) {
      console.log('ACHEI');
    } else {
      console.log('NÃO ACHEI');
    }

    iniciarBusca(); // Pergunta por outro nome
  });
}

console.log(`--- Cadastro de ${totalNomesParaCadastrar} Nomes ---`);
cadastrarNomes();