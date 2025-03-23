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

int main(void)
{

    float p, r = 0.05, m;
    int meses, ano; // tempo considere o meses para calcular
    char escolha;

    printf("\nQual a capital incial (O valor investido no comeco?):");
    scanf("%f", &p);
    fflush(stdin);
    printf("\nAplicou durante meses ou anos?(m para meses e a para anos)");
    scanf("%c", &escolha);
    fflush(stdin);

    if (escolha == 'a' || 'A')
    {
        printf("\nInforme a quantidade de anos:");
        scanf("%i", &ano);
        fflush(stdin);
        meses = ano * 12;
    }
    else if (escolha == 'm' || 'M')
    {
        printf("\nInforme a quantidade de meses:");
        scanf("%i", &meses);
        fflush(stdin);
    }

    m = p * pow(1 + r, meses);

    printf("\nMontante Final R$%.2f ",m);

    return 0;
}