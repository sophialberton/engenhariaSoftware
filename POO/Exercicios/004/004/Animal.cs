public class Animal 
{
    private string especie;
    private int idade;
    private double peso;
    private string som;

    public Animal(string esp, int idd, double pso, string som){
        this.especie=esp;
        this.idade=idd;
        this.peso=pso;
        this.som=som;
    }

    public void EmitirSom(){

        Console.Write(this.som);
        
        /*
        LONGO E INEFICIENTE!!! Apenas criei mais uma propriedade, que dai obriga infomrar o som do animal/especie.
        if(especie==gato){
            Console.writeLine("Miau!")
        }
        if(especie==cachorro){
            Console.writeLine("AuAu!")
        }
        if(especie==boi){
            Console.writeLine("Muu!")
        }
        if(especie==galinha){
            Console.writeLine("Cócó!")
        }
        if(especie==Passaro){
            Console.writeLine("Piu!")
        }
        else{
            Console.writeLine("Som de especie não programada")
        }*/
    }

}