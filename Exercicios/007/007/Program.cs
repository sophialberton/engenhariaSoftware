// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Produto produto1 = new Produto("Maça", 2.04, 30);
Produto produto2 = new Produto("Aveia", 38.78, 60);
Produto produto3 = new Produto("Miojo", 5.78, 90);

CarrinhoDeCompras carrinho1 = new CarrinhoDeCompras();

carrinho1.AdicionarProdutoCarrinho(produto1);

carrinho1.ExibirProdutosNoCarrinho();
carrinho1.CalcularValorTotal();


Console.ReadKey();

