import alunoNotas from "./alunodados.js";
const notas = alunoNotas();

let alunoMedia = () => {
    const mediaAluno = (notas.nota1 + notas.nota2 + notas.nota3) / 3;
    
    switch(mediaAluno>0){
        case (mediaAluno >= 9):
            console.log(`Aluno ${notas.nomeAluno} com 
            Media ${mediaAluno.toFixed(2)} - Conceito A`);
        break;
        case (mediaAluno >= 8 && mediaAluno < 9):
            console.log(`Aluno ${notas.nomeAluno} com 
            Media ${mediaAluno.toFixed(2)} - Conceito B`);
        break;
        case (mediaAluno >= 7 && mediaAluno < 8):
            console.log(`Aluno ${notas.nomeAluno} com 
            Media ${mediaAluno.toFixed(2)} - Conceito C`);
        break;
        default:
            console.log(`Aluno ${notas.nomeAluno} com 
            Media ${mediaAluno.toFixed(2)} - Conceito D - Reprovado`);
    }
}
export default alunoMedia;

alunoMedia();
