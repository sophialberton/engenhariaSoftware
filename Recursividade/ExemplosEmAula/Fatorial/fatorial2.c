#include <stdio.h>
//Questão de concurso Dev TSE 
//Recursão
//Função if usa mais memoria mas o processamento vai mais rapido
int fatorial(int n) //'n' recebeu valor numero na main
{
    if (n == 0 || n == 1)
        return 1;
    return n * fatorial(n - 1);
}

int main()
{
    int numero, resultado;

    printf("Informe o numero: ");
    scanf("%d", &numero);

    resultado = fatorial(numero); //valor de numero ira ser o valor de n na função

    printf("O fatorial de %d eh: %d\n", numero, resultado);

}
