public class Produto
{
    //------------------------
    //atributos ou propriedades
    //-------------------------
    //**padrao das propriedades sao sempre privadas
    private string nome;
    private int quantidade;
    private double preco;


    public Produto(string nom, int qtd, double pre)
    {
        this.nome=nom;
        this.quantidade=qtd;
        this.preco=pre;
    }

     public void CalcularTotal()    
    {
        double pre=this.preco;
        int qtd=this.quantidade;

        double valortotal= pre*qtd;

        Console.WriteLine(valortotal);
        
    }
}