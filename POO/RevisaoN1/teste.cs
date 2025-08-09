public class Jogador {
    private string nome;
    public int x, y;
    private ConsoleKeyInfo cima, baixo, esquerda, direita;

    public Jogador(string nome, int x, int y, ConsoleKey cima, ConsoleKey baixo, ConsoleKey esquerda, ConsoleKey direita) {
        this.nome = nome;
        this.x = x;
        this.y = y;
        this.cima = cima;
        this.baixo = baixo;
        this.esquerda = esquerda;
        this.direita = direita;
    }

    public void mover(ConsoleKey tecla) {
        if (tecla == cima) this.y--;
        if (tecla == baixo) this.y++;
        if (tecla == esquerda) this.x--;
        if (tecla == direita) this.x++;
    }

    public void Exibir() {
        Console.SetCursorPosition(x, y);
        Console.Write(nome);
    }
}
