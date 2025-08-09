using System.Runtime.InteropServices;

public class CarrinhoDeCompras
{
    //propriedade apenas sera essa lista.
    public List<Produto> produtosNoCarrinho { get; set; }//get → Permite acessar o valor da propriedade, set → Permite modificar o valor da propriedade.

    //metodo construtor da lista
    public CarrinhoDeCompras()
    {
        this.produtosNoCarrinho = new List<Produto>(); // Evita null
    }

    public void AdicionarProdutoCarrinho(Produto produto)
    {
        produtosNoCarrinho.Add(produto);
    }
    public void ExibirProdutosNoCarrinho()
    {
        Console.WriteLine("Produtos no carrinho:\n");
        foreach (var produto in produtosNoCarrinho)
        {
            Console.WriteLine($"- {produto.nome}: {produto.preco:C}"); // Formata como moeda
        }
    }
    public double CalcularValorTotal()
    {
        double total = 0;
        foreach (var produto in produtosNoCarrinho)
        {
            total += produto.preco;
        }
        Console.WriteLine($"Valor total do carrinho: {total:C}"); // Mostra no console formatado como moeda
        return total;

    }
}