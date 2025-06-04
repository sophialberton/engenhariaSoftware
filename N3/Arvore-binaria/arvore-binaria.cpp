#include <iostream>
using namespace std;

struct ELEMENTO
{
    int numero;
    ELEMENTO *dir;
    ELEMENTO *esq;
};

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
            cout << "Cadastrar funcionalidade ainda nao implementada.\n";
            cout << "Digite um numero para cadastrar: ";
            cin >> num;
            
            ELEMENTO *novo = new ELEMENTO;
            novo->numero = num;
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
            cout << "Listar Pre-ordem funcionalidade ainda nao implementada.\n";
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