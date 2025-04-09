#include <stdio.h>
#include <string.h>

int main (){
    char texto[100], temp;
    int inicio, fim;

    printf("\nDigite uma string: ");
    scanf("%s", texto);

    inicio=0;
    fim= strlen(texto)-1;
    while (inicio < fim)
    {
        temp = texto[inicio];
        texto[inicio]= texto[fim];
        texto[fim] = temp;
        inicio ++;
        fim --;
    }
    printf ("String invertida: %s\n", texto);

}