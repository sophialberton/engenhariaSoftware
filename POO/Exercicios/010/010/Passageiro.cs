using System.Collections.Specialized;

public class Passageiro
{
    private string nome;
    private long numeroDoPassaporte;
    private List<Voo> voosReservados;  // Usando uma lista para armazenar múltiplos voos

    public Passageiro(string nome, long numPassaporte, Voo vooReservado = null)
    {
        this.nome = nome;
        this.numeroDoPassaporte = numPassaporte;
        this.voosReservados = new List<Voo>();  // Inicializa a lista de voos reservados
        // Se um voo for fornecido, ele será adicionado à lista de voos reservados
        if (vooReservado != null)
        {
            this.voosReservados.Add(vooReservado);
        }

    }
    // Método para reservar voo para o passageiro
    public void ReservarVoo(Voo voo)
    {
        this.voosReservados.Add(voo);
    }

    // Método para exibir os detalhes do passageiro e voo reservado
    public void ExibirDetalhes()
    {
        Console.WriteLine($"Passageiro: {nome}");
        Console.WriteLine($"Número do Passaporte: {numeroDoPassaporte}");
        // Verifica se o passageiro tem voos reservados
        if (this.voosReservados.Count > 0)
        {
            Console.WriteLine("Voos Reservados:");
            foreach (var voo in voosReservados)
            {
                Console.WriteLine($"Voo {voo.numeroDoVoo} - Destino: {voo.destino} - Partida: {voo.DataHoraDaPartida}");
            }
        }
        else
        {
            Console.WriteLine("Nenhum voo reservado.");
        }
    }
}