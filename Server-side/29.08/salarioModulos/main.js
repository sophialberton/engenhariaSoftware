import processaFuncionario from "./processaFuncionario.js";
import exibeFuncionario from "./exibeFuncionarios.js"; // plural

function main() {
  const resultado = processaFuncionario();
  exibeFuncionario(resultado);
}

main();
