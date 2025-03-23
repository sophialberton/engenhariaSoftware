public class Aluno
{
    private string nome;
    private int idade;
    private string sexo; 
    private int matricula;
    
    private List<string> disciplinas { get; set; }

    public Aluno(string nome, int idade, string sexo, int matricula, List<string> disciplinas)
    {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.matricula = matricula;
        this.disciplinas = disciplinas ?? new List<string>(); // Evita null
    }

    public void AdicionarDisciplina(string disciplina)
    {
        disciplinas.Add(disciplina);
    }

    public void ExbibirDiciplinas(){
        Console.WriteLine("Disciplinas:");
        foreach (var disciplina in disciplinas)
        {
            Console.WriteLine($"- {disciplina}");
        }
    }
    public void Apresentar()
    {
        Console.WriteLine($"Meu nome eh: {nome}, tenho: {idade} anos (Sexo: {sexo}, Matrícula: {matricula})");
    }

    public void MostrarMatricula(){
        Console.WriteLine($" Matrícula: {matricula} \t|\t Nome: {nome}");
    }
}   