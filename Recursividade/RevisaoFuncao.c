#include <stdio.h>
#include <stdlib.h>

/*Se uma função precisa retornar uma resposta ela tem retorn com a regra de coerencia,
se nao precisa retornar nada ela começa com void e nao precisa de return */

//*int[]* oq vai devolver
//"ordenar" é o nome da função
//"int numeros[]"" é o que a função precisa para trabalhar
void ordenar(int n[])
{
    int i, j, temp;
    for (i = 0; i < 6; i++)
    {
        for (j = i + 1; j < 6; j++)
        {
            if (n[i] > n[j])
            {
                temp = n[1];
                n[i] = n[j];
                n[j] = temp;
            }
        }
    }
}

void imprimir(int num[])
{
    for (int i = 0; i < 6; i++)
    printf("%d ", num[i]);
    printf("\n");
}

//Todas essas funções poderia ser colodas em outro arquvivo.c e adicionar no #incude "arquivoFuncoes.c"

int main()
{

    int numeros[6];

    // nao importa o jeito q esses numeros foram coletados
    // primeiro vetor
    numeros[0] = 78;
    numeros[1] = 2;
    numeros[2] = 45;
    numeros[3] = 98;
    numeros[4] = 1;
    numeros[5] = 56;
    
    ordenar(numeros);
    imprimir(numeros);

    // 4 horas depois...
    numeros[0] = 5;
    numeros[1] = 61;
    numeros[2] = 27;
    numeros[3] = 3;
    numeros[4] = 9;
    numeros[5] = 63;

    ordenar(numeros);
    imprimir(numeros);

    return 0;
}