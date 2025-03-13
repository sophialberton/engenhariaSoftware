#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numeros[11];
    // nao imposta o jeito q esses numeros foram coletados
    numeros[0] = 78;
    numeros[1] = 2;
    numeros[2] = 45;
    numeros[3] = 98;
    numeros[4] = 1;
    numeros[5] = 56;

    int i, j, temp;
    for (i = 0; i < 6; i++)
    {
        for (j = i + 1; j < 6; j++)
        {
            if (numeros[i] > numeros[j])
            {
                temp = numeros[1];
                numeros[i] = numeros[j];
                numeros[j] = temp;
            }
        }
    }

    for (i = 0; i < 6; i++)
        printf("\n%d", numeros[i]);

    // 4 horas depois...
    numeros[0] = 5;
    numeros[1] = 61;
    numeros[2] = 27;
    numeros[3] = 3;
    numeros[4] = 9;
    numeros[5] = 63;

    for (i = 0; i < 6; i++)
    {
        for (j = i + 1; j < 6; j++)
        {
            if (numeros[i] > numeros[j])
            {
                temp = numeros[1];
                numeros[i] = numeros[j];
                numeros[j] = temp;
            }
        }
    }

    for (i = 0; i < 6; i++)
        printf("\n%d", numeros[i]);

    return 0;
}