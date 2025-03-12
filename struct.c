#include<stdlib.h>
#include<stdio.h>

#define QUANT 5

struct Aluno {
	int matricula;
	char nome[50];
	int idade;
};

int main(){
	
	struct Aluno alunos[QUANT];
	int i;
 
	printf("Entre com os dados dos alunos\n");
	for(i=0; i<QUANT;i++);
	{
	printf("\nAluno numero %d\n", i+1);
	printf("Matricula : ");
	scanf("d%,&alunos[i]).matricula");
 	fflush(stdin);
 
	printf("Nome :");
	scanf("%d", &alunos[i].idade);
	fflush(stdin);
	}	
	
	//mostra os dados em formato de tabela
	printf("\n");
	printf("===============================================\n");
	printf("| %-3s | %-30s | %-3s | \n", "Mat","Nome","Idd");
	printf("\n");
	
	
	return 0;
}
















