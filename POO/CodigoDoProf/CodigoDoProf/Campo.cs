public class Campo
{
    // atributos ou propriedades
    private int largura;
    private int altura;
    private int coluna;
    private int linha;


    // métodos ou operações
    public Campo(int lar, int alt, int col, int lin)
    {
        this.largura = lar;
        this.altura = alt;
        this.coluna = col;
        this.linha = lin;
    }


    public void desenhar()
    {
        // identifica os pontos iniciais e finais horizontais e 
        // verticais
        int colIni, colFin, linIni, linFin;
        colIni = this.coluna;
        colFin = this.coluna + this.largura;
        linIni = this.linha;
        linFin = this.linha + this.altura;

        // desenha as linhas horizontais
        for (int x=colIni; x<=colFin; x++)
        {
            // linha superior
            Console.SetCursorPosition(x, linIni);
            Console.Write("-");

            // linha inferior
            Console.SetCursorPosition(x, linFin);
            Console.Write("-");
        }

        // desenha as linhas verticais
        for (int y=linIni; y<=linFin; y++)
        {
            // linha esquerda
            Console.SetCursorPosition(colIni,y);
            Console.Write("|");

            // linha direita
            Console.SetCursorPosition(colFin,y);
            Console.Write("|");
        }

    }


    public bool podeMover(Coordenada paraOndeVou)
    {
        bool pode = true;

        // verifica o X para onde o jogador está indo
        if (paraOndeVou.x == coluna || paraOndeVou.x == coluna+largura)
            pode = false;

        // verifica o Y para onde o jogador está indo
        if (paraOndeVou.y == linha || paraOndeVou.y == linha+altura)
            pode = false;

        return pode;
    }


}




/*
    public bool podeMover(int x, int y, ConsoleKey tecla)
    {
        bool pode = true;

        // verifica o limite superior do campo
        // jogador está se movendo para cima
        if (tecla == ConsoleKey.W || tecla == ConsoleKey.UpArrow)
        {
            y--;
            if (y == linha) pode = false;
        }

        // verifica o limite inferior do campo
        // jogador está se movendo para baixo
        if (tecla == ConsoleKey.S || tecla == ConsoleKey.DownArrow)
        {
            y++;
            if (y == linha+altura) pode = false;
        }

        // verifica o limite esquerdo do campo
        // jogador está se movendo para a esquerda
        if (tecla == ConsoleKey.A || tecla == ConsoleKey.LeftArrow)
        {
            x--;
            if (x == coluna) pode = false; 
        }

        // verifica o limite direito do campo
        // jogador está se movendo para a direita
        if (tecla == ConsoleKey.D || tecla == ConsoleKey.RightArrow)
        {
            x++;
            if (x == coluna+largura) pode = false;
        }

        return pode;
    }

*/