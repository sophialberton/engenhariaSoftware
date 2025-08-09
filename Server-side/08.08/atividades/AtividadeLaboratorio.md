## Atividades
1. Reproduzir o exemplo em NodeJS (source_code/servidor.js), utilizando porta e rotas diferentes, de modo que se possa visualizar o resultado da execução do exemplo em um browser. Para Windows (cmd ou PowerShell):
Se curl não funcionar diretamente, no PowerShell do Windows 10+ ele já vem instalado, só rodar:
```
curl http://localhost:2000/
```
2. Em uma casa de secos e molhados há uma determinada promoção: a cada 20 reais em compras, cada cliente recebe um cupom com um ponto. A partir de 10 pontos ou cupons, clientes têm direito a 50% do total de pontos como porcentagem de desconto em uma nova compra, sendo que o acúmulo de pontos é múltiplo de 10 até 100 pontos para uso. Crie um algoritmo que, a partir do valor total de uma compra, identifica se o cliente terá desconto na próxima compra. Se sim, informe qual será a porcentagem. Em seguida, traduza o algoritmo para JavaScript e o execute utilizando NodeJS. Obs.: neste momento o acumulo de pontos não será implementado

Supondo que o servidor está rodando na porta 2000, o comando para testar a rota /desconto com valor 250 seria:
```
curl "http://localhost:2000/desconto?valor=250"
```
Isso vai retornar no terminal (do vs code) a resposta da API, tipo:
O cliente terá um desconto de 5% na próxima compra.

Exemplos para testar direto no terminal:
```
curl "http://localhost:2000/desconto?valor=50"
curl "http://localhost:2000/desconto?valor=19"
curl "http://localhost:2000/desconto?valor=-10"
curl "http://localhost:2000/desconto"
```