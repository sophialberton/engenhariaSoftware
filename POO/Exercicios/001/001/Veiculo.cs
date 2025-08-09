public class Veiculo
{
    //------------------------
    //atributos ou propriedades
    //-------------------------
    //**padrao das propriedades sao sempre privadas
    private string marca;
    private string modelo;
    private int ano;
    private double preco;


    public Veiculo(string mar, string mod, int a, double pre)
    {
        this.marca=mar;
        this.modelo=mod;
        this.ano=a;
        this.preco=pre;
    }

     public void MostrarInformacoes()    
    {
        Console.WriteLine(this.marca);
        Console.WriteLine(this.modelo);
        Console.WriteLine(this.ano);
        Console.WriteLine(this.preco);
    }
}