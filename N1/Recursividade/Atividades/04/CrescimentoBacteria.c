/*4 - Crescimento de Bactérias (Biologia e Saúde)
Bactérias e células podem crescer exponencialmente sob condições ideais. Suponha que 
temos 500 bactérias e elas dobram de quantidade a cada hora.
A cada período, o número de bactérias é multiplicado por 2.
Se quisermos saber quantas bactérias existirão após 5 horas:
1. No início: 500 bactérias
2. Após 1 hora: 500 × 2 = 1000
3. Após 2 horas: 1000 × 2 = 2000
4. Após 3 horas: 2000 × 2 = 4000
5. Após 4 horas: 4000 × 2 = 8000
6. Após 5 horas: 8000 × 2 = 16.000
Ou seja, em apenas 5 horas, a quantidade de bactérias passou de 500 para 16.000! Esse 
mesmo raciocínio é usado para entender crescimento de vírus, como a COVID-19, onde o 
número de infectados pode crescer rapidamente*/

#include <stdio.h>

// Função recursiva para calcular o número final de bactérias
long long calcular_bacterias(long long b, int horas) {
    // Caso base: se não há mais horas para calcular, retorna o valor atual
    if (horas == 0) {
        return b;
    }
    // Recursão: calcula o número de bactérias após o período atual
    return calcular_bacterias(b * 2, horas - 1);
}

int main(void) {
    long long b;  // Número inicial de bactérias
    int horas;    // Tempo em horas

    printf("\nQual o número inicial de bactérias: ");
    scanf("%lld", &b);  // Usando %lld para garantir que o valor seja grande o suficiente

    printf("\nInforme o número de horas para calcular o crescimento: ");
    scanf("%i", &horas);

    // Calcula o número de bactérias após o número de horas usando recursão
    long long bactFinal = calcular_bacterias(b, horas);

    // Exibe o resultado
    printf("\nNúmero final de bactérias após %d hora(s): %lld\n", horas, bactFinal);

    return 0;
}
