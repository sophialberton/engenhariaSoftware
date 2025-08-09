/*
*   Sistema de aluguel para festas
*   Fiesta!!!
*/

List<string> opcoes = new List<string>(); //criou lista opcoes e uma lista nova
opcoes.Add("1 - Manter Clientes"); //adicionou a opção 1
opcoes.Add("2 - Manter Temas"); //adicionou a opção 2
opcoes.Add("3 - Registrar Aluguel"); //adicionou a opção 3
opcoes.Add("4 - Registrar Devolução"); //adicionou a opção 4
opcoes.Add("0 - Sair"); //adicionou a opção 0

//Tela tela = new Tela(80, 25, ConsoleColor.Black, ConsoleColor.Magenta); //com base na classe Tela, criou uma nova tela com 80 colunas/25 linhas/cor de fundo preto/cor de texto roxo
Tela tela = new Tela(); //pegando o metodo padrao ja denominado na classe tela
ClienteCRUD clienteCRUD = new ClienteCRUD();
string opcao;


while (true)
{
    tela.prepararTela("Fiesta!!!");
    opcao = tela.mostrarMenu(opcoes, 5, 2);
    switch (opcao)
    {
        case "1":
            clienteCRUD.executarCRUD();
            break;
        case "2":
            Console.WriteLine("Manter Temas");
            break;
        case "3":
            Console.WriteLine("Registrar Aluguel");
            break;
        case "4":
            Console.WriteLine("Registrar Devolução");
            break;
        case "0":
            Console.WriteLine("Saindo...");
            return;
        default:
            Console.WriteLine("Opção inválida!");
            break;
    }

    tela.centralizar("Pressione qualquer tecla para continuar...",24,0,80);
    Console.ReadKey();
}
