#include <stdio.h>

int fatorial(int n)
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

    resultado = fatorial(numero);

    printf("O fatorial de %d eh: %d\n", numero, resultado);

}
