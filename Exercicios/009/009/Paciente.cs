public class Paciente
{
    private string nome;
    private int idade;
    private double altura;
    private double peso;

    public Paciente(string nome, int idd, double alt, double peso){
        this.nome = nome;
        this.idade = idd;
        this.altura = alt;
        this.peso = peso;
    }

    public void CalcularIMCPaciente(){
        //IMC = peso/altura²
        double IMC;
        IMC = this.peso/(this.altura*2);
        Console.WriteLine($"O Imc do paciente eh {IMC}\n");

    }
    
}