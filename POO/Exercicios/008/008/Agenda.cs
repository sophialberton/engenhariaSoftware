public class Agenda
{
    public List<Contato> contatosNaAgenda { get; set; }//get → Permite acessar o valor da propriedade, set → Permite modificar o valor da propriedade.

    //metodo construtor da lista
    public Agenda()
    {
        this.contatosNaAgenda = new List<Contato>(); // Evita null
    }
    public void AdicionarContatoNaAgenda(Contato contato)
    {
        contatosNaAgenda.Add(contato);
    }
    public void BuscarContato()
    {
        Console.WriteLine("Digite o nome do contato que deseja buscar:");
        string? busca = Console.ReadLine();

        bool encontrado = false;
        foreach (var contato in contatosNaAgenda)
        {
            if (contato.nome.Equals(busca, StringComparison.OrdinalIgnoreCase)) // Comparação sem diferenciar maiúsculas/minúsculas
            {
                Console.WriteLine($"Contato encontrado: {contato.nome} - {contato.email}");
                encontrado = true;
                break; // Sai do loop após encontrar o primeiro contato
            }
        }

        if (!encontrado)
        {
            Console.WriteLine("Contato não encontrado.");
        }

    }
    public void ExibirContatosNaAgenda()
    {
        Console.WriteLine("Contatos:\n");
        foreach (var contato in contatosNaAgenda)
        {
            Console.WriteLine($"\n |- {contato.nome} - {contato.numeroDeTelefone} - {contato.email} \t|");
        }
    }

}














