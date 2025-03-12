#include<stdio.h>
int main(){
	//PONTEIRO É OM PARA TRABALHAR COM QUNTIDADE MASSIVAS DE INFO.

    //criação das variaveis
	int numero1, numero2;
	
    //criação dos ponteiros
	int *pont1, *pont2;

	//atribuição de enderecos aos ponteiros
    pont1 = &numero1;
    pont2 = &numero2;

	//atribuiçõa de valores á variaveis
    numero1 = 50;
	numero2 = 3;
	
	printf("\nO valor de numero1 e: %d", numero1);
	printf("\nO endereco de numero1 e %p", &numero1); // O S comercial sigifica o ENDEREÇO ESPECIDICO da varivel
	printf("\nO valor de PONT1 e: %d", *pont1); // o asteristico siginifica que esta chamando O PONTEIRO
	printf("\nO endereco de PONT1 e %p", pont1 ); // Se eu colocasse o S comercial antes do pont1 ele chamaria o ENDEREÇO ESPECIFICO DO PONTEIRO.

	printf("\n");
		
	printf("\nO valor de numero2 e: %d", numero2);
	printf("\nO endereco de numero2 e %p", &numero2);
	printf("\nO valor de PONT2 e: %d", *pont2);
	printf("\nO endereco de PONT2 e %p", pont2 );
	
	return 0;
}