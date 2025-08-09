/*3 - Crescimento Populacional (Demografia e Planejamento Urbano)
Imagine que uma cidade tem 100.000 habitantes e cresce 2% ao ano. Para estimar a 
população nos próximos anos, aplicamos o mesmo princípio dos juros compostos e da 
demanda de produção.
A fórmula é:
P_f = P_i × (1 + r)^t
Onde:
• P_f = População final
• P_i = População inicial
• r = Taxa de crescimento (2% = 0.02)
• t = Tempo (anos)
Se quisermos saber a população após 3 anos:
1. No primeiro ano: 100.000 × 1.02 = 102.000
2. No segundo ano: 102.000 × 1.02 = 104.040
3. No terceiro ano: 104.040 × 1.02 = 106.120,80
Ou seja, após 3 anos, a população será aproximadamente 106.121 habitantes*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Função recursiva para calcular a população final
float calcular_populacao(float p, float r, int anos) {
    // Caso base: se não há mais anos para calcular, retorna o valor atual
    if (anos == 0) {
        return p;
    }
    // Recursão: calcula a população do ano atual e chama a função para o próximo ano
    return calcular_populacao(p * (1 + r), r, anos - 1);
}

int main(void) {
    float p, r = 0.02, pop;
    int anos;  // tempo para calcular em anos

    printf("\nQual a população inicial: ");
    scanf("%f", &p);
    
    printf("\nInforme o número de anos para calcular o crescimento: ");
    scanf("%i", &anos);

    // Calcula a população final após o número de anos usando recursão
    pop = calcular_populacao(p, r, anos);

    // Exibe o resultado
    printf("\nPopulação final após %d ano(s): %.2f habitantes\n", anos, pop);

    return 0;
}
