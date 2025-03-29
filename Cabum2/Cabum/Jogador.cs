using System.Reflection.Metadata;

public class Jogador
{
    //propriedades ou atributos

    public int x, y;
    //private int vidas;
    private string simbolo;
    private ConsoleKey paraCima, paraBaixo, paraEsq, paraDir;

    //metodos ou operações

    /*public Jogador(int x, int y, string simbolo)
    {
        this.y = y;
        this.x = x;
        this.simbolo = simbolo;
       // this.vidas = 3; //valor fixo
    }*/
    public Jogador(int x, int y, string simbolo, ConsoleKey cma, ConsoleKey bxa, ConsoleKey esq, ConsoleKey dir)
    {
        this.x = x;
        this.y = y;
        this.simbolo = simbolo;
        //this.vida = 3;
        this.paraCima = cma;
        this.paraBaixo = bxa;
        this.paraEsq = esq;
        this.paraDir = dir;
    }
    public void desenhar()
    {
        Console.SetCursorPosition(this.x, this.y);
        Console.Write(this.simbolo);
    }
    public void apagar()
    {
        Console.SetCursorPosition(this.x, this.y);
        Console.Write(" ");
    }

    /*public void definirTeclas(ConsoleKey cma, ConsoleKey bxa, ConsoleKey esq, ConsoleKey dir)

   {
       this.paraCima = cma;
       this.paraBaixo = bxa;
       this.paraEsq = esq;
       this.paraDir = dir;
   }*/

  
    public void mover(ConsoleKey tecla)
    {
        this.apagar();
        if (tecla == this.paraCima) this.y--;
        if (tecla == this.paraBaixo) this.y++;
        if (tecla == this.paraEsq) this.x--;
        if (tecla == this.paraDir) this.x++;
        this.desenhar();
    }

    //MELHORIA !
    public bool podeReponderTecla(ConsoleKey tecla)
    {
        bool podeMover = false;
        if (tecla == this.paraCima || tecla == this.paraBaixo || tecla == this.paraDir || tecla == this.paraEsq)
        {
            podeMover = true;
        }
        return podeMover;
    }

    /*Versao 1 para evitar colisões entre jogadores
    public string qualDirecao(ConsoleKey tecla)
    {
        string qual = "";
        if (tecla == this.paraCima) qual = "c";
        if (tecla == this.paraBaixo) qual = "b";
        if (tecla == this.paraEsq) qual = "e";
        if (tecla == this.paraDir) qual = "d";
        return qual;
    }*/

    //versao 2 para evitar colisoes entre jogadores (apenas mudanando nome do metoo e variavel)
    public Coordenada simularMovimento(ConsoleKey tecla)
    {
        Coordenada coord = new Coordenada();
        coord.x = this.x;
        coord.y = this.y;
        if (tecla == this.paraCima) coord.y--;
        if (tecla == this.paraBaixo) coord.y++;
        if (tecla == this.paraEsq) coord.x--;
        if (tecla == this.paraDir) coord.x++;

        return coord;
    }





}
