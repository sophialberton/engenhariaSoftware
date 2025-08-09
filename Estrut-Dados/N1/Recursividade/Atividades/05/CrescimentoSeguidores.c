/*5 - Crescimento de Seguidores em Redes Sociais (Marketing Digital e Influência)
Muitos influenciadores digitais crescem de forma exponencial, pois seguidores trazem 
novos seguidores. Suponha que um influenciador começa com 1.000 seguidores e, por 
viralizar seus posts, sua base de fãs cresce 15% ao mês.
Para calcular a quantidade de seguidores após 4 meses, usamos:
1. No primeiro mês: 1000 × 1.15 = 1150
2. No segundo mês: 1150 × 1.15 = 1322,50
3. No terceiro mês: 1322,50 × 1.15 = 1520,88
4. No quarto mês: 1520,88 × 1.15 = 1749,01
Ou seja, após 4 meses, o influenciador terá cerca de 1.749 seguidores, um crescimento 
considerável! Esse mesmo cálculo pode ser usado para prever o crescimento de uma 
empresa ou a viralização de um vídeo no YouTube*/

#include <stdio.h>

#include <stdio.h>

// Função recursiva para calcular o número de seguidores após determinado número de meses
float calcular_seguidores(float seguidores, float taxa, int meses) {
    // Caso base: se não há mais meses para calcular, retorna o valor atual
    if (meses == 0) {
        return seguidores;
    }
    // Recursão: multiplica o valor atual pela taxa e chama a função para o próximo mês
    return calcular_seguidores(seguidores * (1 + taxa), taxa, meses - 1);
}

int main() {
    float seguidores, taxa = 0.15;
    int meses;

    // Entrada do usuário
    printf("Qual o número inicial de seguidores: ");
    scanf("%f", &seguidores);

    printf("Informe o número de meses para calcular o crescimento: ");
    scanf("%d", &meses);

    // Chamada da função recursiva
    float seguidores_finais = calcular_seguidores(seguidores, taxa, meses);

    // Exibe o resultado final
    printf("\nNúmero final de seguidores após %d mês(es): %.2f\n", meses, seguidores_finais);

    return 0;
}
