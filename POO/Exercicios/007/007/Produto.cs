public class Produto
{
    public string nome;
    public double preco;
    private int quantidadeEmEstoque;

    public Produto(string nome, double preco, int qtd)
    {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = qtd;
    }

}