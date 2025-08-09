#include <iostream>
using namespace std;

struct ELEMENTO
{
    int numero;
    ELEMENTO *dir;
    ELEMENTO *esq;
};

ELEMENTO *IncluirElemento(ELEMENTO *atual, ELEMENTO *novo); 
void MostrarPreOrdem(ELEMENTO *atual);
/*ponto e virgula para avisar q o codigo da função está declarado,
mas não implementado aqui, nesse caso esta la embaixo no final do código.*/

main()
{
    int num;
    int opcao;
    ELEMENTO *raiz = NULL;
    while (true)
    {
        /*Menu
        1 - Cadastrar
        2 - Consultar
        3 - Apagar
        4 - Listar Pre-ordem
        5 - Listar Ordem
        6 - Listar Pos-ordem
        0 - Sair
        */

        system("cls");
        cout << "---=== Arvore Binaria ===---:\n";
        cout << "1 - Cadastrar\n";
        cout << "2 - Consultar\n";
        cout << "3 - Apagar\n";
        cout << "4 - Listar Pre-ordem\n";
        cout << "5 - Listar Ordem\n";
        cout << "6 - Listar Pos-ordem\n";
        cout << "0 - Sair\n";
        cout << "Escolha uma opcao: ";
        cin >> opcao;

        if (opcao == 0)
        {
            cout << "Saindo do programa.\n";
            break;
        }
        else if (opcao == 1)
        {
            cout << "Digite um numero para cadastrar: ";
            cin >> num;

            // Aqui você deve implementar a lógica de inserção na árvore binária.
            ELEMENTO *novo = new ELEMENTO;
            novo->numero = num;
            novo->esq = NULL;
            novo->dir = NULL;

            raiz = IncluirElemento(raiz, novo);
        }
        else if (opcao == 2)
        {
            cout << "Consultar funcionalidade ainda nao implementada.\n";
        }
        else if (opcao == 3)
        {
            cout << "Apagar funcionalidade ainda nao implementada.\n";
        }
        else if (opcao == 4)
        {
            cout << "--==Listagem de Pre-ordem.==--\n";
            MostrarPreOrdem(raiz);
            cout << "\n";
            system("pause");
        }
        else if (opcao == 5)
        {
            cout << "Listar Ordem funcionalidade ainda nao implementada.\n";
        }
        else if (opcao == 6)
        {
            cout << "Listar Pos-ordem funcionalidade ainda nao implementada.\n";
        }
        else
        {
            cout << "Opcao invalida. Tente novamente.\n";
            continue;
        }
    }
}

//Função para criar um novo elemento na árvore binária.
ELEMENTO *IncluirElemento(ELEMENTO *atual, ELEMENTO *novo)
{
    if (atual == NULL) return novo;
    if (novo->numero < atual->numero)
        atual->esq = IncluirElemento(atual->esq, novo);
    else
        atual->dir = IncluirElemento(atual->dir, novo);
    return atual;
}

//Função para mostrar Pre-ordem
void MostrarPreOrdem(ELEMENTO *atual)
{
    if (atual != NULL)
    {
        cout << atual->numero << " - ";
        MostrarPreOrdem(atual->esq);
        MostrarPreOrdem(atual->dir);
    }
}

//Função para consultar Elemento
ELEMENTO *ConsultarElemento(ELEMENTO *atual, int num)
{
    if (atual == NULL)
        return NULL;
    else if(atual->numero == num) return atual;
    else if (num < atual->numero) return ConsultarElemento(atual->esq, num);
    else return ConsultarElemento(atual->dir, num);
    }

// Função para excluir um elemento da árvore binária.
ELEMENTO* ExcluirElemento(ELEMENTO *raiz, int num) {
    ELEMENTO *atual = raiz;
    ELEMENTO *anterior = NULL;

    // 1. Buscar o nó a ser removido e manter o pai
    while (atual != NULL && atual->numero != num) {
        anterior = atual;
        if (num < atual->numero)
            atual = atual->esq;
        else
            atual = atual->dir;
    }

    if (atual == NULL)
        return raiz; // Elemento não encontrado

    // 2. Caso 1: Nó com 0 ou 1 filho
    if (atual->esq == NULL || atual->dir == NULL) {
        ELEMENTO *filho = (atual->esq != NULL) ? atual->esq : atual->dir;

        if (anterior == NULL) {
            // Removendo a raiz com 0 ou 1 filho
            free(atual);
            return filho;
        }

        if (anterior->esq == atual)
            anterior->esq = filho;
        else
            anterior->dir = filho;

        free(atual);
    }
    // 3. Caso 2: Nó com dois filhos
    else {
        // Encontrar o menor da subárvore direita (sucessor)
        ELEMENTO *paiSucessor = atual;
        ELEMENTO *sucessor = atual->dir;
        while (sucessor->esq != NULL) {
            paiSucessor = sucessor;
            sucessor = sucessor->esq;
        }

        // Substituir o valor
        atual->numero = sucessor->numero;

        // Agora remover o sucessor (tem no máximo 1 filho à direita)
        ELEMENTO *filhoSucessor = (sucessor->dir != NULL) ? sucessor->dir : NULL;

        if (paiSucessor->esq == sucessor)
            paiSucessor->esq = filhoSucessor;
        else
            paiSucessor->dir = filhoSucessor;

        free(sucessor);
    }

    return raiz;
}
