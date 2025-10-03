/* 
Considere que voce comprou uma quantidade de chocolate para compartilhar com os teus colegas.
A fim de não deiar ninguem sem chocolate, voce comprou mais chocolate que o numero de colegas. 
Portanto, não tem como dividir igualmente o numero de chocolates pelo número de colegas.

Escreva um programa que peça o número de chocolates comprados e o número de colegas existente
(não esqueça que o número de chocolate é maior que o número de colegas). 
No final, informe quantos chocolates são necessárois para que a divisão fique igual entre os colegas.
Utilize declarações try-catch
*/

/* Considere que voce comprou uma quantidade de chocolate para compartilhar com os teus colegas.
A fim de não deiar ninguem sem chocolate, voce comprou mais chocolate que o numero de colegas. 
Portanto, não tem como dividir igualmente o numero de chocolates pelo número de colegas.

Escreva um programa que peça o número de chocolates comprados e o número de colegas existente
(não esqueça que o número de chocolate é maior que o número de colegas). 
No final, informe quantos chocolates são necessárois para que a divisão fique igual entre os colegas.
Utilize declarações try-catch
*/

function calcularChocolates() {
  try {
    // 1. Pede os dados ao usuário
    const chocolatesStr = prompt("Digite o número de chocolates comprados:");
    const colegasStr = prompt("Digite o número de colegas:");

    // 2. Converte as entradas para números inteiros
    const chocolates = parseInt(chocolatesStr);
    const colegas = parseInt(colegasStr);

    // 3. Validação das entradas
    if (isNaN(chocolates) || isNaN(colegas)) {
      throw new Error("Valores inválidos. Por favor, digite apenas números.");
    }

    if (colegas <= 0) {
      throw new Error("O número de colegas deve ser maior que zero.");
    }
    
    if (chocolates <= colegas) {
      throw new Error("O número de chocolates deve ser estritamente maior que o número de colegas.");
    }
    
    // 4. Lógica do cálculo
    const resto = chocolates % colegas;

    // Se o resto for 0, a divisão já é igual, o que contraria a regra do problema.
    // Mas, por segurança, podemos tratar. Se não houver resto, precisamos de `colegas` chocolates
    // para que cada um ganhe mais um. Se houver resto, precisamos de `colegas - resto`.
    const chocolatesNecessarios = (resto === 0) ? 0 : colegas - resto;
    
    // 5. Exibe o resultado
    if (chocolatesNecessarios === 0) {
        // Este caso não deveria acontecer segundo o enunciado, mas é bom tratar.
        console.log("A divisão já é perfeita! Não são necessários mais chocolates.");
    } else {
        console.log(`Para uma divisão igual, são necessários mais ${chocolatesNecessarios} chocolate(s).`);
    }

  } catch (error) {
    // Captura qualquer erro lançado no bloco 'try' e exibe a mensagem
    console.error(`Ocorreu um erro: ${error.message}`);
  }
}

// Executa a função
calcularChocolates();