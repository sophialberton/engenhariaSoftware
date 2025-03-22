public class ContaBancaria
{
    //------------------------
    //atributos ou propriedades
    //-------------------------
    //**padrao das propriedades sao sempre privadas
    private string nome;
    private int numerodaconta;
    private double saldo;


    public ContaBancaria(string nom, int numconta, double saldo)
    {
        this.nome=nom;
        this.numerodaconta=numconta;
        this.saldo=saldo;
    }

     public void Depositar(double valordepositado)    
    {
        double saldoFinal=this.saldo+valordepositado;

        Console.WriteLine("Seu saldo atual: "+saldoFinal+"\n");
        
    }
    public void Sacar(double valordesaque){
        double saldoFinal=this.saldo-valordesaque;

        Console.WriteLine("Seu saldo atual: "+saldoFinal+"\n");
    }
    
}   