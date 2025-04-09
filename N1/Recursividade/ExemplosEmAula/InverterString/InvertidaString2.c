#include <stdio.h>
#include <string.h>

void inverter(char str[], int inicio, int fim)
{
    if (inicio >= fim)
        return;
    char temp = str[inicio];
    str[inicio] = str[fim];
    str[fim] = temp;
    inverter(str, inicio + 1, fim - 1);
}

int main()
{
    char texto[100];

    printf("\nDigite uma string: ");
    /*gets(texto);O problema com o uso de gets(texto) no seu código é que,
    embora funcione em algumas versões antigas de compiladores C, gets() é uma função insegura e
    foi removida no C11. Ela permite que o usuário digite um número de caracteres maior do que o buffer alocado,
    o que pode causar overflow de buffer e, assim, comprometer a segurança do programa.*/
    fgets(texto, sizeof(texto), stdin); // Usando fgets ao invés de gets

    inverter(texto, 0, strlen(texto) - 1);
    printf("\nTexto invertido: %s ", texto);
}