#include <stdio.h>
#include <stdlib.h>

int main()
{   
    /*malloc(sizeof(int)): Aloca dinamicamente um espaço na memória grande o suficiente para armazenar um inteiro (int). O sizeof(int) retorna o tamanho de um int em bytes (geralmente 4 bytes).
(int *): Faz a conversão do tipo void* retornado pelo malloc para int*, indicando que o ponteiro armazenará um inteiro.
pont: É um ponteiro para int que armazenará o endereço da memória recém-alocada.
Importante: O malloc pode falhar e retornar NULL. Sempre é bom verificar:*/
    int *pont = (int *)malloc(sizeof(int)); //alocação dinamica de memoria

    *pont = 42;

//    printf("\nO valor de numero1 e: %d", pont); //chamando valor declarado a variavel
//	printf("\nO endereco de numero1 e %d", &pont); // O S comercial sigifica o ENDEREÇO ESPECIDICO da varivel 
//	printf("\nO valor de PONT1 e: %d", *pont); 

    return 0;
}