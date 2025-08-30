import dadosFuncionarios from "./dadosFuncionarios.js";

let processaFuncionario = () => {
  const funcionario = dadosFuncionarios();
  const { nomeFuncionario, salarioBruto } = funcionario;

  if (salarioBruto > 2500) {
    let impostoRenda = 0.11;
    let impostoInss = 0.08;

    let descontoImpostoRenda = salarioBruto * impostoRenda;
    let descontoInss = salarioBruto * impostoInss;

    let salarioLiquido = salarioBruto - descontoImpostoRenda - descontoInss;

    return { nomeFuncionario, salarioBruto, descontoImpostoRenda, descontoInss, salarioLiquido };
  } else {
    let impostoInss = 0.05;
    let descontoInss = salarioBruto * impostoInss;

    let salarioLiquido = salarioBruto - descontoInss;

    return { nomeFuncionario, salarioBruto, descontoInss, salarioLiquido };
  }
};

export default processaFuncionario;
