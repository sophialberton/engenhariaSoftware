#include <iostream>
#include <string>
#include <vector>

using namespace std;

main()
{
    vector<string> dados;
    int x, y, troca, compara;
    string temp;

    dados.push_back("Catatu"); //0
    dados.push_back("Xunda"); //1
    dados.push_back("Penelope"); //2
    dados.push_back("Ze buscape"); //3
    dados.push_back("Tiao Gaviao"); //4
    dados.push_back("Mutley"); //5
    dados.push_back("Babalu"); //6
    dados.push_back("Pepe Legal"); //7

    // Aplica o algoritimo Bubble Sort v1
    for (x = 0; x < dados.size(); x++) // dados.size sinaliza a quantidade de de dados.
    {
        for (y = x + 1; y < dados.size(); y++)
        {
            if(dados[y]<dados[x]){
                temp=dados[x];
                dados[x] = dados[y];
                dados[y] = temp;
            }
        }
    }
    //final booble sort.

    return 0;
}