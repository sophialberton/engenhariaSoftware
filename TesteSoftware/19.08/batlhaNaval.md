Objetivo
Desenvolver uma versão simplificada do jogo Batalha Naval que roda diretamente no navegador, usando HTML, CSS e JavaScript. Parte da estrutura já está pronta (HTML e CSS), bem como uma parte inicial do código JavaScript. Seu papel será completar a lógica do jogo, tornar o app funcional e criar testes unitários para garantir que as funções implementadas estejam corretas.

Regras do Jogo (versão simplificada)
O jogo será de um jogador contra o computador.

O tabuleiro será de 5x5 casas.

O computador posicionará 3 navios aleatoriamente.

O jogador clicará nas células do tabuleiro para tentar acertar os navios.

Cada clique revela se foi um acerto (💥) ou erro (🌊).

O jogo termina quando os 3 navios forem afundados.

Não há contra-ataque do computador.

Estrutura Fornecida
Você receberá os seguintes arquivos:

index.html
Contém a estrutura da página e o tabuleiro 5x5 com divs clicáveis.

styles.css
Aplica o estilo visual no tabuleiro, nas células e no resultado dos disparos.

script.js (incompleto)
Contém:

A geração dos navios do computador;

Um esqueleto da função que trata os cliques;

Uma estrutura básica para manter o estado do jogo.

Tarefas
1. Completar o JavaScript
Implemente as seguintes partes do código:

Lógica para gerar posições aleatórias dos navios (sem repetição);

Função que trata o clique do jogador:

Verifica se a célula já foi clicada;

Marca como acerto (💥) ou erro (🌊);

Atualiza a contagem de acertos;

Finaliza o jogo quando todos os navios forem afundados.

2. Testes Unitários
Crie testes no final do script.js com console.log() que verifiquem:

Se a função de geração dos navios retorna 3 posições únicas válidas;

Se o clique em uma posição acertada altera o conteúdo corretamente;

Se o jogo reconhece o fim após 3 acertos.

Critérios de Avaliação
HTML e CSS usados corretamente sem alterações estruturais;

JavaScript completado de forma funcional;

Testes no console comprovando o funcionamento das funções;

Código bem estruturado e comentado.

Dica
Use Math.floor(Math.random() * 5) para gerar coordenadas entre 0 e 4. Salve as posições dos navios como pares de coordenadas: [{x: 1, y: 3}, {x: 0, y: 4}, ...].

Extras (opcional)
Se desejar ir além:

Adicione um contador de tentativas;

Mostre uma mensagem de "Vitória!" ao fim;

Impeça cliques após o fim do jogo.