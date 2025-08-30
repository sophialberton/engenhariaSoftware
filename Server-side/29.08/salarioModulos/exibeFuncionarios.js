function exibeFuncionario(resultado) {
  console.log("Nome:", resultado.nomeFuncionario);
  console.log("Salário Bruto:", resultado.salarioBruto);
  if (resultado.descontoImpostoRenda !== undefined) {
    console.log("Desconto IR:", resultado.descontoImpostoRenda);
  }
  console.log("Desconto INSS:", resultado.descontoInss);
  console.log("Salário Líquido:", resultado.salarioLiquido);
  console.log("-------------------------");
}

export default exibeFuncionario;
