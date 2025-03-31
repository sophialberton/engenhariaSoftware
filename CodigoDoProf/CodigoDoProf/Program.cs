List<Jogador> jogadores = new List<Jogador>();

Campo campoJogo = new Campo(70,20,1,1);
campoJogo.desenhar();

/*
Jogador jog1 = new Jogador(3,3,"#",ConsoleKey.W, ConsoleKey.S, ConsoleKey.A, ConsoleKey.D);
Jogador jog2 = new Jogador(68,18,"%",ConsoleKey.UpArrow, ConsoleKey.DownArrow, ConsoleKey.LeftArrow, ConsoleKey.RightArrow);
jogadores.Add(jog1);
jogadores.Add(jog2);
*/

jogadores.Add(new Jogador(3,3,"#",ConsoleKey.W, ConsoleKey.S, ConsoleKey.A, ConsoleKey.D));
jogadores.Add(new Jogador(68,18,"%",ConsoleKey.UpArrow, ConsoleKey.DownArrow, ConsoleKey.LeftArrow, ConsoleKey.RightArrow));

//for (int i = 0; i < jogadores.Count; i++) jogadores[i].desenhar();
//foreach(Jogador jog in jogadores) jog.desenhar();
jogadores.ForEach(jog => jog.desenhar());


Console.CursorVisible = false;
ConsoleKeyInfo tecla;
Coordenada coord = new Coordenada();

while (true)
{
    tecla = Console.ReadKey(true);
    if (tecla.Key == ConsoleKey.Escape) break;

    /*
    jogadores.ForEach(jog => {
        coord = jog.simularMovimento(tecla.Key);
        if (campoJogo.podeMover(coord)) jog.mover(tecla.Key);
    });
    */

    foreach(Jogador jog in jogadores)
    {
        coord = jog.simularMovimento(tecla.Key);
        if (campoJogo.podeMover(coord)) jog.mover(tecla.Key);
    }
}

Console.ReadKey();



