#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída (para printf, scanf, etc.)
#define QUANT 2     // Define uma constante QUANT com valor 2 (quantidade de alunos)

// Exemplo 1: Declaração de uma struct chamada "Aluno"
struct Aluno
{
    int matricula;  // Campo para armazenar a matrícula do aluno (número inteiro)
    char nome[50];  // Campo para armazenar o nome do aluno (string de até 49 caracteres + '\0')
    int idade;      // Campo para armazenar a idade do aluno (número inteiro)
};

/* Exemplo 2: Declaração de uma struct anônima com typedef, criando o tipo "Aluno" 
typedef struct {
    int matricula;  // Campo para matrícula (inteiro)
    int nome[30];   // Campo para nome (AQUI TEM UM ERRO: deveria ser char nome[30], não int)
    int idade;      // Campo para idade (inteiro)
} Aluno;           // Define o nome do tipo como "Aluno"*/

int main()
{
    // struct Aluno alunos[QUANT]; // Isso seria para criar um array usando a struct do Exemplo 1

    struct Aluno aluno[QUANT]; // Cria um array de alunos usando a struct do Exemplo 1 (com QUANT elementos)
    int i;  // Variável de controle para loops

    // Realiza a entrada de dados QUANT vezes (para cada aluno)
    printf("Entre com os dados dos Alunos\n");
    for (i = 0; i < QUANT; i++)
    {
        printf("\n--== Aluno numero %d ==--\n", i + 1);  // Mostra o número do aluno atual

        // Lê a matrícula do aluno
        printf("Matricula    : ");
        scanf("%d", &aluno[i].matricula);  // Lê um inteiro e armazena no campo matricula do aluno atual
        fflush(stdin);  // Limpa o buffer do teclado (evita problemas com próximas leituras)

        // Lê o nome do aluno
        printf("Nome         : ");
        scanf(" %49[^\n]", &aluno[i].nome);  // Lê uma linha inteira (até 49 caracteres) e armazena no campo nome
        fflush(stdin);  // Limpa o buffer novamente

        // Lê a idade do aluno
        printf("Idade        : ");
        scanf("%d", &aluno[i].idade);  // Lê um inteiro e armazena no campo idade
        fflush(stdin);  // Limpa o buffer
    }

    // Mostrar os dados em formato de tabela
    printf("\n\n");
    printf("============================================== \n");
    // Cabeçalho da tabela com formatação (%-3s significa string alinhada à esquerda com 3 espaços)
    printf("| %-3s | %-30s | %-3s |\n", "Mat", "Nome", "Idd");
    printf("============================================== \n");

    // Loop para mostrar os dados de cada aluno
    for (i = 0; i < QUANT; i++)
    {
        // Mostra os dados do aluno atual formatados na tabela
        printf("| %-3d | %-30s | %-3d |\n", aluno[i].matricula, aluno[i].nome, aluno[i].idade);
        printf("============================================== \n");  // Linha separadora
    }
}