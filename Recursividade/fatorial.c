#include <stdio.h>
#include <stdlib.h>
//for vai mais lento no processamento mas vai gastar menos memoria
int main()
{
    int numero, resultado, i;

    printf("Informe o numero: ");
    scanf("%d", &numero);

    resultado = 1;
    for (i = 2; i <= numero; i++)
    {
        // resultado = resultado * i;
        resultado *= i;
    };

    printf("O fatorial de %d eh: %d\n", numero, resultado);

    return 0;
}
