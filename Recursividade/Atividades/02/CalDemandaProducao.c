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
#include <math.h>

float calcular_demanda(float p, float r, int meses) {
    // Caso base: se não há mais meses para calcular, retorna o valor atual
    if (meses == 0) {
        return p;
    }
    // Recursão: calcula a demanda do mês atual e chama a função para o próximo mês
    return calcular_demanda(p * (1 + r), r, meses - 1);
}

int main(void)
{
    float p, r = 0.10, m;
    int meses, ano; // tempo considere o meses para calcular
    char escolha;

    printf("\nQual a capital inicial (O valor investido no começo?): ");
    scanf("%f", &p);
    fflush(stdin);
    printf("\nAplicou durante meses ou anos?(m para meses e a para anos): ");
    scanf("%c", &escolha);
    fflush(stdin);

    if (escolha == 'a' || escolha == 'A') {
        printf("\nInforme a quantidade de anos: ");
        scanf("%i", &ano);
        fflush(stdin);
        meses = ano * 12;
    } else if (escolha == 'm' || escolha == 'M') {
        printf("\nInforme a quantidade de meses: ");
        scanf("%i", &meses);
        fflush(stdin);
    }

    // Calcula a demanda final com recursão
    m = calcular_demanda(p, r, meses);

    printf("\nMontante Final R$%.2f\n", m);

    return 0;
}
