using System.Runtime.CompilerServices;

public class Jogador {

    private string nome;
    private int pontuacao;

    public Jogador(string nom, int pontos){
        this.nome=nom;
        this.pontuacao=pontos;
    }
    
    public void RegistrarPontuacao(int novospontos){
        this.pontuacao=novospontos+pontuacao;
        Console.WriteLine("Pontuacao atual: "+this.pontuacao+"\n");
    }
}