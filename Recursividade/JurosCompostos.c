/*1 - Cálculo de Juros Compostos (Finanças e Comércio)
Os juros compostos são um tipo de crescimento financeiro onde os juros são aplicados sobre o valor total acumulado, e não apenas sobre o capital inicial.
Imagine que você investe R$ 1.000,00 em um banco que oferece uma taxa de 5% ao mês. A fórmula dos juros compostos é:
M = P × (1 + r)^t
M = Montante final (o valor que você terá no final)
P = Capital inicial (o valor investido no começo)
r = Taxa de juros (em decimal, ou seja, 5% = 0.05)
t = Tempo (quantidade de meses ou anos)
Como calcular manualmente? --
Se o investimento for R$ 1.000,00, a taxa de 5% ao mês e o tempo de 3 meses, calculamos:
1.No primeiro mês: 1000 × 1.05 = 1050
2.No segundo mês: 1050 × 1.05 = 1102,50
3.No terceiro mês: 1102,50 × 1.05 = 1157,63
Então, ao final de 3 meses, o investimento terá R$ 1.157,63.*/

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