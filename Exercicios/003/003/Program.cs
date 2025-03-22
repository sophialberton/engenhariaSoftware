// See https://aka.ms/new-console-template for more information
using System.Reflection;
using System.Security.Cryptography;

Console.WriteLine("Sophia Picasky Alberton");
ContaBancaria contabanco = new ContaBancaria("Sophia", 123456, 500.56);


Console.WriteLine("\nAperte S para SACAR e D para DEPOSITAR:\n ");
ConsoleKeyInfo tecla;
tecla = Console.ReadKey();

if (tecla.Key == ConsoleKey.D)
{
    Console.WriteLine("\nDigite o valor que queira Depositar:  \n");

    if (double.TryParse(Console.ReadLine(), out double valor)) // Tenta ler e converter ao mesmo tempo
    {
        contabanco.Depositar(valor);
    }
    else
    {
        Console.WriteLine("\nValor inválido. Tente novamente.");
    }

}
else if (tecla.Key == ConsoleKey.S)
{
    Console.Write("\nDigite o valor que queira Sacar: \n ");
    if (double.TryParse(Console.ReadLine(), out double valor)) // Tenta ler e converter ao mesmo tempo
    {
        contabanco.Sacar(valor);
    }
    else
    {
        Console.WriteLine("\nValor inválido. Tente novamente.");
    }
}

Console.ReadKey();