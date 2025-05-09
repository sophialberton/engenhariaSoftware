public class Tela
{
    private int largura;
    private int altura;
    private ConsoleColor corFundo;
    private ConsoleColor corTexto;


    public Tela(int largura, int altura, ConsoleColor fundo, ConsoleColor texto)
    {
        this.largura = largura;
        this.altura = altura;
        this.corFundo = fundo;
        this.corTexto = texto;
    }


    public void prepararTela(string titulo = "")
    {
        Console.ForegroundColor = corTexto;
        Console.BackgroundColor = corFundo;
        Console.Clear();
        this.desenharMoldura(0, 0, this.largura, this.altura);
        this.desenharMoldura(0, 0, this.largura, 2);
        this.centralizar(titulo, 1, 0, this.largura);
    }


    public void desenharMoldura(int colIni, int linIni, int colFin, int linFin)
    {
        // linhas horizontais
        for (int x = colIni; x <= colFin; x++)
        {
            Console.SetCursorPosition(x, linIni);
            Console.Write("-");
            Console.SetCursorPosition(x, linFin);
            Console.Write("-");
        }
        // linhas verticais
        for (int y = linIni; y <= linFin; y++)
        {
            Console.SetCursorPosition(colIni, y);
            Console.Write("|");
            Console.SetCursorPosition(colFin, y);
            Console.Write("|");
        }
        // cantos
        Console.SetCursorPosition(colIni, linIni); Console.Write("+");
        Console.SetCursorPosition(colIni, linFin); Console.Write("+");
        Console.SetCursorPosition(colFin, linIni); Console.Write("+");
        Console.SetCursorPosition(colFin, linFin); Console.Write("+");
    }


    public void centralizar(string texto, int lin, int colIni, int colFin)
    {
        int colTexto = ((colFin - colIni - texto.Length) / 2) + colIni;
        Console.SetCursorPosition(colTexto, lin);
        Console.Write(texto);
    }


    public string mostrarMenu(List<string> opcoes, int colIni, int linIni)
    {
        string opcaoEscolhida = "";

        // procura pela maior largura entre as opções do menu
        int largura = 0;
        foreach (string opcao in opcoes)
        {
            if (opcao.Length > largura)
            {
                largura = opcao.Length;
            }
        }

        // define a largura e altura para a moldura do menu
        int colFin = colIni + largura + 1;
        int linFin = linIni + opcoes.Count + 2;
        this.desenharMoldura(colIni, linIni, colFin, linFin);

        // mostra as opções do menu
        colIni++;
        linIni++;
        for (int i = 0; i < opcoes.Count; i++)
        {
            Console.SetCursorPosition(colIni, linIni);
            Console.WriteLine(opcoes[i]);
            linIni++;
        }

        // pergunta a opção escolhida
        Console.SetCursorPosition(colIni, linIni);
        Console.Write("Escolha uma opção: ");
        opcaoEscolhida = Console.ReadLine();

        // retorna a opção escolhida
        return opcaoEscolhida;
    }
}