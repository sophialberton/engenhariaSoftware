// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


Contato contato1 = new Contato("Sophia", 47991779017, "sophia.alberton@gmail.com");
Contato contato2 = new Contato("NomeFicticio", 123456789, "emailficticio@hotmail.com");

Agenda minhaAgenda = new Agenda ();

minhaAgenda.AdicionarContatoNaAgenda(contato1);
minhaAgenda.AdicionarContatoNaAgenda(contato2);

minhaAgenda.BuscarContato();

minhaAgenda.ExibirContatosNaAgenda();

Console.ReadKey();


