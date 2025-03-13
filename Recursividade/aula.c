#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *pont = (int *)malloc(sizeof(int));

    *pont = 42;

    printf("\nO valor de numero1 e: %d", pont); //chamando valor declarado a variavel
	printf("\nO endereco de numero1 e %d", &pont); // O S comercial sigifica o ENDEREÇO ESPECIDICO da varivel
	printf("\nO valor de PONT1 e: %d", *pont); 

    return 0;
}