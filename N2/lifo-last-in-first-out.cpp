#include <iostream>
#include <string>
#include <windows.h>

using namespace std;

struct ELEMENTO
{
    int numero;
    ELEMENTO *proximo;
};

int main()  // Corrigido para int main()
{
    SetConsoleOutputCP(CP_UTF8);
    int opcao, valor;
    ELEMENTO *inicio = NULL;
    ELEMENTO *fim = NULL;
    ELEMENTO *topo = NULL;  // Adicionado - estava faltando a declaração

    while (true)
    {
        system("cls");
        cout << "---== Menu ==---" << endl;  // Corrigido o desenho
        cout << "1 - Adicionar elemento" << endl;
        cout << "2 - Mostrar lista" << endl;
        cout << "3 - Apagar elemento" << endl;
        cout << "4 - Esvaziar lista" << endl;  // Corrigido typo "lisa"
        cout << "5 - Apagar específico" << endl;
        cout << "0 - Sair" << endl;
        cout << "Opção: ";  // Corrigido acentuação
        cin >> opcao;

        if (opcao == 0)
        {
            break;
        }

        if (opcao == 1)
        {
            cout << endl << "Adicionar elemento" << endl;
            cout << "Número para inserir: ";
            cin >> valor;

            ELEMENTO *novo = new ELEMENTO();
            novo->numero = valor;
            novo->proximo = NULL;  // Corrigido - estava atribuindo a topo que era NULL

            if (inicio == NULL)
            {
                inicio = novo;
                fim = novo;
                topo = novo;  // Atualiza o topo
            }
            else
            {
                fim->proximo = novo;
                fim = novo;
                topo = novo;  // Atualiza o topo
            }
        }

        if (opcao == 2)
        {
            cout << endl << "Lista atual" << endl;
            ELEMENTO *atual = inicio;
            while (atual != NULL)
            {
                cout << atual->numero << "↓ ";  // Seta para baixo mais legível
                atual = atual->proximo;
            }
            cout << endl;
            system("pause");
        }

        if (opcao == 3)
        {
            if (inicio == NULL)
            {
                cout << endl << "Lista vazia" << endl;
            }
            else
            {
                ELEMENTO *atual = inicio;  // Corrigida a declaração
                inicio = inicio->proximo;
                delete atual;
                if (inicio == NULL)
                {
                    fim = NULL;
                    topo = NULL;  // Atualiza o topo
                }
                cout << endl << "Elemento apagado" << endl;
            }
            system("pause");
        }

        if (opcao == 4)
        {
            ELEMENTO *atual = inicio;
            while (atual != NULL)
            {
                ELEMENTO *temp = atual;
                atual = atual->proximo;
                delete temp;
            }
            inicio = NULL;
            fim = NULL;
            topo = NULL;  // Atualiza o topo
            cout << endl << "Lista esvaziada" << endl;
        }

        if (opcao == 5)
        {
            cout << "--=== Apagar específico ===--" << endl;
            cout << "Valor para apagar: ";
            cin >> valor;

            bool apagou = false;
            ELEMENTO *atual = inicio;
            ELEMENTO *anterior = NULL;

            while (atual != NULL)
            {
                if (atual->numero == valor)
                {
                    if (anterior == NULL)  // Primeiro elemento
                    {
                        inicio = atual->proximo;
                        if (inicio == NULL)
                        {
                            fim = NULL;
                            topo = NULL;
                        }
                    }
                    else
                    {
                        anterior->proximo = atual->proximo;
                        if (atual == fim)
                        {
                            fim = anterior;
                        }
                    }
                    delete atual;
                    apagou = true;
                    break;
                }
                anterior = atual;
                atual = atual->proximo;
            }

            if (apagou)
            {
                cout << "Elemento " << valor << " apagado" << endl;
            }
            else
            {
                cout << "Elemento " << valor << " não encontrado" << endl;
            }
            system("pause");
        }
    }

    // Limpeza final antes de sair
    ELEMENTO *atual = inicio;
    while (atual != NULL)
    {
        ELEMENTO *temp = atual;
        atual = atual->proximo;
        delete temp;
    }

    return 0;  // Adicionado retorno explícito
}