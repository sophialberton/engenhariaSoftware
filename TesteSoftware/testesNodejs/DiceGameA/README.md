Objetivo
Nesta atividade, você irá completar a implementação da lógica de um jogo de dados simples em JavaScript e escrever testes unitários para garantir que seu código funciona corretamente. Individual ou em dupla.

Descrição
Você recebeu um arquivo script.js que contém a estrutura principal do jogo, incluindo:

Funções para rolar os dados, decidir o vencedor da rodada e atualizar o placar.

Manipulação da interface para mostrar os resultados no navegador.

Um conjunto de testes usando console.assert() com algumas partes incompletas.

Seu trabalho é:

Implementar as funções faltantes:

rollDice(): deve retornar um número aleatório entre 1 e 6.

decideWinner(p1Roll, p2Roll): deve comparar os valores dos dados dos jogadores e indicar quem venceu ou se houve empate.

updateScoreboard(winner): deve atualizar o placar interno com base no resultado da rodada.

Completar os testes no console usando console.assert():

Validar que os valores retornados por rollDice() estão dentro do intervalo correto.

Testar a lógica de decisão de vencedor em diferentes cenários.

Testar se o placar é atualizado corretamente após cada resultado.

Verificar se a função de reset zera o placar.

Testar seu código abrindo a página HTML no navegador:

O botão "Jogar" deve lançar dados para os dois jogadores, mostrar os resultados e atualizar o placar.

O botão "Resetar Placar" deve zerar todos os contadores.

Requisitos
Use o arquivo fornecido com a estrutura do código.

Não altere a estrutura da interface HTML e nem a lógica de manipulação do DOM.

Foque na implementação da lógica dentro do módulo diceGame.

Escreva asserções claras e úteis para os testes.

Comente seu código quando necessário para explicar sua lógica.

Dicas
Para gerar números aleatórios inteiros, pesquise sobre Math.random() e Math.floor().

Use console.assert(condição, mensagem) para validar seus testes.

Teste seu código frequentemente no console do navegador para garantir que tudo funciona como esperado.

Por fim: 

Converta o projeto do "Jogo de dados" em um projeto que pode ser testado pelo NODE.

Anexar zip com toda estrutura de projeto na entrega.