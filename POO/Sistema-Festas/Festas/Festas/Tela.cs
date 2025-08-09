public class Tela
{
    private int largura;
    private int altura;
    private ConsoleColor corFundo;
    private ConsoleColor corTexto;

    public Tela(int largura, int altura, ConsoleColor corFundo, ConsoleColor corTexto)
    {
        this.largura = largura;
        this.altura = altura;
        this.corFundo = corFundo;
        this.corTexto = corTexto;
    }

    //metodo para preparar a tela
    public void prepararTela()
    {
        Console.ForegroundColor = corTexto;
        Console.BackgroundColor = corFundo;
        Console.Clear();
        this.desenharMoldura(0, 0, this.largura, this.altura);
    }


    //metodo para desenhar molduras
    public void desenharMoldura(int colIni, int linIni, int conFin, int linFin)
    {
        for (int x = colIni; x <= conFin; x++)
        {
            Console.SetCursorPosition(x, linIni);
            Console.Write("-");
            Console.SetCursorPosition(x, linFin);
            Console.Write("-");
        }

        for (int y = linIni; y <= linFin; y++)
        {
            Console.SetCursorPosition(colIni, y);
            Console.Write("|");
            Console.SetCursorPosition(conFin, y);
            Console.Write("|");
        }
        //cantos
        Console.SetCursorPosition(colIni, linIni); Console.WriteLine("+");
        Console.SetCursorPosition(colIni, linFin); Console.WriteLine("+");
        Console.SetCursorPosition(conFin, linIni); Console.WriteLine("+");
        Console.SetCursorPosition(conFin, linFin); Console.WriteLine("+");
    }

    //metedo para centralizar titulos

    //metodos para mostrar menu 
}