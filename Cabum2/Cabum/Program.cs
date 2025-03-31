//elementos recebendo suas propriedades
//Cria campo
Campo campoJogo = new Campo(80, 20, 1, 1);
//desenha campo
campoJogo.desenhar();
//desenha campo

/*criar jogador 1
Jogador jog1 = new Jogador(3,3,"$");
//define teclas de controle jogador 1
jog1.definirTeclas(ConsoleKey.W, ConsoleKey.S, ConsoleKey.A, ConsoleKey.D);*/


// Cria o jogador 1
Jogador jog1 = new Jogador(3, 3, "#", ConsoleKey.W, ConsoleKey.S, ConsoleKey.A, ConsoleKey.D);

// Cria o jogador 2
Jogador jog2 = new Jogador(68, 18, "%", ConsoleKey.UpArrow, ConsoleKey.DownArrow, ConsoleKey.LeftArrow, ConsoleKey.RightArrow);

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
while (true)
{
    tecla = Console.ReadKey(true);
    if (tecla.Key == ConsoleKey.Escape) break;

    //calcula a nova posição de jog1 antes de mover
    int novoX1 = jog1.x;
    int novoY1 = jog1.y;
    string direcao1 = jog1.qualDirecao(tecla.Key);
    if (direcao1 == "c") novoY1--;
    if (direcao1 == "b") novoY1++;
    if (direcao1 == "e") novoX1--;
    if (direcao1 == "d") novoX1++;

    // calcula nova posição de jog2 antes de mover 
    int novoX2 = jog2.x;
    int novoY2 = jog2.y;
    string direcao2 = jog2.qualDirecao(tecla.Key);
    if (direcao2 == "c") novoY2--;
    if (direcao2 == "b") novoY2++;
    if (direcao2 == "e") novoX2--;
    if (direcao2 == "d") novoX2++;

    if (jog1.podeReponderTecla(tecla.Key) && campoJogo.podeMover(jog1.x, jog1.y, tecla.Key))
    {
        // so move se não colidir com jog2
        if (novoX1 != jog2.x || novoY1 != jog2.y)
        {
            //move o jog1
            jog1.mover(tecla.Key);
        }
    }

    if (jog2.podeReponderTecla(tecla.Key) && campoJogo.podeMover(jog2.x, jog2.y, tecla.Key))
    {
        if (novoX2 != jog1.x || novoY2 != jog1.y)
        {
            jog2.mover(tecla.Key);
        }
    }

}