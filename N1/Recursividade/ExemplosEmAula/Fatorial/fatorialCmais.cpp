#include <iostream>

using namespace std;

int main()
{
    int numero, resultado, i;

    cout << "Informe o numero: "; //printf no C ansi
    cin >> numero; //Scanf no C ANSI

    resultado=1;
    for (i = 2; i <= numero; i++)
    {
        resultado *= i;
    }

    cout << "O fatorial de " << numero << " eh: " << resultado << endl;
}
