//cada arquvio so contem uma classe, o arquivo e aclasse contem o mesmo  nome 
using System.Reflection.Metadata;
using System.Runtime.CompilerServices;

public class Campo
{
    //------------------------
    //atributos ou propriedades
    //-------------------------
    //**padrao das propriedades sao sempre privadas
    private int largura;
    private int altura;
    private int coluna;
    private int linha;

    //------------------------
    // métodos ou operações
    //------------------------
    //**todo metodo ou operaçõespode fazer apenas uma coisa, uma tarefa por vez 
    //**metodo contrutor nao tem tipo,por nao ter tipo nao vai ter return
    public Campo(int lar, int alt, int col, int lin)
    {
        this.linha=lin;
        this.largura=lar;
        this.altura=alt;
        this.coluna=col;
    }
    //!!!variaveis dentro de metodos sao totalmentes temporarioas, enquanto a das propriedades sao permanestes!!!
    public void desenhar()    
    {
        int colIni, colFin, linIni, linFin;
        colIni = this.coluna;
        colFin = this.coluna + this.largura;
        linIni = this.linha;
        linFin = this.linha + this.altura;

        for(int x=colIni; x<=colFin; x++)
        {
            //linha superior
            Console.SetCursorPosition(x, linIni);
            Console.Write("-");

            //linha inferior
            Console.SetCursorPosition(x, linFin);
            Console.Write("-");
        }

        // desenhar linhas verticais
        for (int y=linIni; y<=linFin; y++)
        {
            //linha superior
            Console.SetCursorPosition(colIni, y);
            Console.Write("|");

            //linha inferior
            Console.SetCursorPosition(colFin, y);
            Console.Write("|");
        }

    }

    public bool podeMover(int x, int y, ConsoleKey tecla)
    {
        bool pode = true;

        // verifica o limeite superior do campo
        // jogador esta movendo para cima
        if (tecla == ConsoleKey.W || tecla == ConsoleKey.UpArrow)
        {
            y--;
            if(y == linha) pode = false;
        }    
        // verificar o limite inferior do campo
        // jogador esta movendo para baixo
        if (tecla == ConsoleKey.S || tecla == ConsoleKey.DownArrow)
        {
            y++;
            if(y == linha+altura) pode = false;
        }

        // verificar o limite esquerdo do campo
        // jogador esta movendo para esquerda
        if(tecla == ConsoleKey.A || tecla == ConsoleKey.LeftArrow)
        {
            x--;
            if(x == coluna) pode = false;
        }

        // verificar o limite direita do campo
        // jogador esta movendo para direita
        if(tecla == ConsoleKey.D || tecla == ConsoleKey.RightArrow)
        {
            x++;
            if(x == coluna+largura) pode = false;
        }
            
        return pode;


    }

}