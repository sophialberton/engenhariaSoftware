import readline from 'readline-sync';

function alunoNotas() {
    const nomeAluno = readline.question('Digite o nome do aluno: ');
    const nota1 = parseFloat(readline.question('Digite a primeira nota: '));
    const nota2 = parseFloat(readline.question('Digite a segunda nota: '));
    const nota3 = parseFloat(readline.question('Digite a terceira nota: ')); 

    return {nomeAluno, nota1, nota2, nota3};
}
export default alunoNotas;
