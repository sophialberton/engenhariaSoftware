#include <iostream>

using namespace std;

int fatorial(int n) //n recebeu valor numero na main
{
    if (n == 0 || n == 1)
        return 1;
    return n * fatorial(n - 1);
}

int main()
{
    int numero, resultado;

    cout << "Informe o numero: "; //printf no C ansi
    cin >> numero; //Scanf no C ANSI

    resultado = fatorial(numero); //valor de numero ira ser o valor de n na função

    cout << "O fatorial de " << numero << " eh: " << resultado << endl;
}
