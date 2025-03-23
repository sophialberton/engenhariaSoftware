// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Voo voo1 = new Voo(001, "Florianopolis", new DateTime(25,03,23,15,30,0)); 
/*DateTime(int year, int month, int day, int hour, int minute, int second)*/

Voo voo2 = new Voo(002, "Sao Paulo", new DateTime(2025,03, 27, 12,45,0));

Passageiro passageiro1 = new Passageiro("Sophia", 123445, voo1);

passageiro1.ReservarVoo(voo2);

passageiro1.ExibirDetalhes();

Console.ReadKey();
