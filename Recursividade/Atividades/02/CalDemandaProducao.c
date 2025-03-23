/* 2 - Cálculo de Demanda de Produção (Indústria e Planejamento)
A demanda de produção é o número de produtos que uma fábrica precisa fabricar para 
atender pedidos ou o mercado. Se a demanda cresce a cada mês (por exemplo, 10% a 
mais que o mês anterior), o cálculo segue um padrão.
Exemplo prático
Suponha que uma fábrica produza 1.000 unidades de um produto no primeiro mês e a 
demanda cresça 10% ao mês.
1. No primeiro mês: 1000 unidades
2. No segundo mês: 1000 + (1000 × 0.10) = 1100
3. No terceiro mês: 1100 + (1100 × 0.10) = 1210
4. No quarto mês: 1210 + (1210 × 0.10) = 1331
A cada mês, somamos 10% do valor do mês anterior. Se a empresa precisar planejar 6 
meses, ela deve continuar essa sequência.*/

#include <stdio.h>
#include <stdlib.h>

float calcular_demanda(float p, float r, int meses) {
    // Caso base: se não há mais meses para calcular, retorna o valor atual
    if (meses == 0) {
        return p;
    }
    // Recursão: soma 10% do valor do mês anterior
    return calcular_demanda(p + (p * r), r, meses - 1);
}

int main(void) {
    float p, r = 0.10, m;
    int meses, ano;  // tempo para calcular em meses
    char escolha;

    printf("\nQual a demanda inicial (quantidade de produtos no primeiro mês): ");
    scanf("%f", &p);
    getchar();  // Limpa o buffer de entrada

    printf("\nA demanda será calculada por meses ou anos? (m para meses, a para anos): ");
    scanf("%c", &escolha);
    getchar();  // Limpa o buffer de entrada

    // Define o número de meses, dependendo da escolha de anos ou meses
    if (escolha == 'a' || escolha == 'A') {
        printf("\nInforme a quantidade de anos: ");
        scanf("%i", &ano);
        meses = ano * 12;  // Converte anos para meses
    } else if (escolha == 'm' || escolha == 'M') {
        printf("\nInforme a quantidade de meses: ");
        scanf("%i", &meses);
    }

    // Calcula a demanda final após o número de meses usando recursão
    m = calcular_demanda(p, r, meses);

    // Exibe o resultado
    printf("\nDemanda final após %d mês(es): %.2f unidades\n", meses, m);

    return 0;
}