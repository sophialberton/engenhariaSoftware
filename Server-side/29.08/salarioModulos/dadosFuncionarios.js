import readline from 'readline-sync';

function dadosFuncionarios() {
  const nomeFuncionario = readline.question('Digite o nome do funcionario: ');
  const salarioBruto = parseFloat(readline.question('Digite o salario Bruto: '));

  return { nomeFuncionario, salarioBruto };
}

export default dadosFuncionarios;
