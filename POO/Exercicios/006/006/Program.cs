// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
List<string> listaDisciplinas = new List<string> { "Prog. Orientada a Obejtos", "Estrutura de Dados" };
Aluno aluno1 = new Aluno("Sophia",19,"Feminino",123456,listaDisciplinas);

aluno1.Apresentar();
aluno1.MostrarMatricula();
aluno1.AdicionarDisciplina("Requisitos");
aluno1.ExbibirDiciplinas();

Console.ReadKey();
