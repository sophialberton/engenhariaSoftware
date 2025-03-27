#include <stdio.h>
#define QUANT 2
// ex 1
struct Aluno
{
	int matricula;
	char nome[50];
	int idade;
};

/*exemplo 2 */
typedef struct  {
	int matricula;
	int nome[30];
	int idade;
}Aluno;

int main()
{
	// sctruct ALuno alunos[QUANT] //criano ex 1

	struct Aluno aluno[QUANT]; // criando ex 2
	int i;

	// realiza a entrada de dados QUNAT vezes
	printf("Entre com os dados dos Alunos\n");
	for (i = 0; i < QUANT; i++)
	{
		printf("\n--== Aluno numero %d ==--\n", i + 1);

		printf("Matricula	: ");
		scanf("%d", &aluno[i].matricula);
		fflush(stdin);

		printf("Nome 		: ");
		scanf(" %49[^\n]", &aluno[i].nome);
		fflush(stdin);

		printf("Idade 		: ");
		scanf("%d", &aluno[i].idade);
		fflush(stdin);
	}

	// Mostrar os dados em tabela
	printf("\n\n");
	printf("============================================== \n");
	printf("| %-3s | %-30s | %-3s |\n", "Mat", "Nome", "Idd");
	printf("============================================== \n");

	for (i = 0; i < QUANT; i++)
	{
		printf("| %-3d | %-30s | %-3d |\n", aluno[i].matricula, aluno[i].nome, aluno[i].idade);
		printf("============================================== \n");
	}
}
