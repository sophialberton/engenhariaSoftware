//elementos recebendo suas propriedades
//Cria campo
Campo campoJogo = new Campo(80,20,1,1);
//desenha campo
campoJogo.desenhar();
//desenha campo

/*criar jogador 1
Jogador jog1 = new Jogador(3,3,"$");
//define teclas de controle jogador 1
jog1.definirTeclas(ConsoleKey.W, ConsoleKey.S, ConsoleKey.A, ConsoleKey.D);*/


// Cria o jogador 1
Jogador jog1 = new Jogador(3,3,"#",ConsoleKey.W,  ConsoleKey.S, ConsoleKey.A, ConsoleKey.D);

// Cria o jogador 2
Jogador jog2 = new Jogador(68,18,"%",ConsoleKey.UpArrow, ConsoleKey.DownArrow, ConsoleKey.LeftArrow, ConsoleKey.RightArrow);

//desenha jogador 2
jog1.desenhar();

/*Jogador jog2 = new Jogador(68,18,"&");
//define teclas de controle jogador 2
jog2.definirTeclas(ConsoleKey.UpArrow, ConsoleKey.DownArrow, ConsoleKey.LeftArrow, ConsoleKey.RightArrow);*/

//desenhar jogador 2
jog2.desenhar();


/*desenha chamando as ações/metodos dos elementos
campoJogo.desenhar();
jog1.desenhar();
jog2.desenhar();*/

//desliga cursor (para parar de ficar piscando)
Console.CursorVisible = false;

//loop do jogo/gamelooping
ConsoleKeyInfo tecla;
while(true)
{
    tecla = Console.ReadKey(true);
    if (tecla.Key == ConsoleKey.Escape) break;

    if (campoJogo.podeMover(jog1.x, jog1.y, tecla.Key))
    {
        jog1.mover(tecla.Key);
    }

    if(campoJogo.podeMover(jog2.x, jog2.y, tecla.Key))
    {
        jog2.mover(tecla.Key);;
    }

}