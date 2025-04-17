#include <iostream>
#include <string>

using namespace std;

struct ELEMENTO
{
    int numero;
    ELEMENTO *proximo;
};

main()
{
    int opcao, valor;
    ELEMENTO *inicio = NULL;
    ELEMENTO *fim = NULL;

    while (true)
    {
        system("cls");
        cout << "---== Menu =---" << endl;
        cout << "1 - Adicionar elemento" << endl;
        cout << "2 - Mostrar lista" << endl;
        cout << "3 - Apagar elemento" << endl;
        cout << "4 - Esvaziar lisa" << endl;
        cout << "5 - Apagar especifico" << endl; // estrutura deixara de ser fifo!
        cout << "0 - Sair" << endl;
        cout << "Opcao: " << endl;
        cin >> opcao;
        // se quiser escolher qual elemento quer apagar, deixa de ser uma estrutra fifo/fila.
        //  sai do programa
        if (opcao == 0)
        {
            break;
        }

        // adiciona um element
        if (opcao == 1)

        {
            // pergunta um valor para inserir na lista
            cout << endl
                 << "Adicionar elemento" << endl;
            cout << "Numero para inserir: ";
            cin >> valor;

            // cria um novo ELEMENTO em local aleatorio da memória
            ELEMENTO *novo = new ELEMENTO();
            novo->numero = valor;
            novo->proximo = NULL;

            // agora, colcoa o ELEMENTO na lista

            // lista vazia
            if (inicio == NULL)
            {
                // o novo ELEMENTO torna-se o INICIO da lista
                inicio = novo;
                fim = novo;
            }
            // lista ja possui algum elemento
            else
            {
                // Descobre o endereço do ultimo ELEMENTO
                //adiciona o elemento ao final da fila/lista
                fim->proximo = novo;
                fim = novo;
            }
        }

        // apresenta a lita na tela
        if (opcao == 2)
        {

            cout << endl
                 << "Lista atual" << endl;
            ELEMENTO *atual;
            atual = inicio;
            while (atual != NULL)
            {
                cout << atual->numero << " - ";
                atual = atual->proximo;
            }
            cout << endl;
            system("pause");
        }

        if (opcao == 3)
        {
            if (inicio == NULL)
            {
                cout << endl
                     << "Lista vazia" << endl;
            }
            else
            {
                ELEMENTO *atual;
                *atual = *inicio;
                inicio = inicio->proximo;
                delete atual;
                cout << endl
                     << "Elemento apagado" << endl;
            }
            system("pause");
        }

        if (opcao == 4)
        {
            ELEMENTO *atual;
            atual = inicio;
            while (inicio != NULL)
            {
                atual = inicio;
                inicio = inicio->proximo;
                delete atual;
            }
            cout << endl
                 << "Lista esvaziada" << endl;
        }

        if (opcao == 5)
        {
            cout << "--===Apagar especifico ===--" << endl;
            cout << "Valor para apagar" << endl;
            cin >> valor;

            bool apagou = false;
            ELEMENTO *atual; ELEMENTO *anterior;
            atual = inicio;
            while (atual != NULL)
            {
                // verifica se é o valor a ser apagado
                if (atual->numero == valor)
                {
                    // o primeiro deve ser apagado
                    if (atual == inicio)
                    {
                        inicio = atual->proximo;
                    }
                    // qualquer outro deve ser apagado
                    else
                    {
                        anterior->proximo = atual->proximo;
                    }
                    delete atual;
                    apagou = true;
                    break;
                }
                anterior = atual;
                atual = atual->proximo;
            }
            // mstra a mensagem se apagou ou nao
            if (apagou)
            {
                cout << "Elemento" << valor << "apagado" << endl;
            }
            else
            {
                cout << "Elemento" << valor << "nao encontrado" << endl;
            }
            system("pause");
        }
    }
}
