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

float calcular_juros_compostos(float p, float r, int t) {
    // Caso base: se o tempo for zero, retorna o valor inicial
    if (t == 0) {
        return p;
    }
    // Recursão: aplica a fórmula para o próximo período de tempo
    return calcular_juros_compostos(p * (1 + r), r, t - 1);
}

int main(void)
{
    float p, r = 0.05, m;
    int meses, ano; // tempo considere os meses para calcular
    char escolha;

    printf("\nQual a capital inicial (O valor investido no começo?): ");
    scanf("%f", &p);
    getchar();  // Limpa o buffer de entrada
    printf("\nAplicou durante meses ou anos? (M para meses e A para anos): ");
    scanf("%c", &escolha);
    getchar();  // Limpa o buffer de entrada

    if (escolha == 'a' || escolha == 'A') {
        printf("\nInforme a quantidade de anos: ");
        scanf("%i", &ano);
        meses = ano * 12;  // Convertendo anos para meses
    } else if (escolha == 'm' || escolha == 'M') {
        printf("\nInforme a quantidade de meses: ");
        scanf("%i", &meses);
    }

    // Calcula o montante final com recursão
    m = calcular_juros_compostos(p, r, meses);

    printf("\nMontante Final R$%.2f\n", m);

    return 0;
}
