### Livro de Atividades – JavaScript (Fundamentos)
Este livro contém uma série de atividades práticas para reforçar os conceitos fundamentais 
de JavaScript. Os exercícios podem ser executados diretamente no navegador utilizando o 
console do DevTools (F12 > Console). 
Cada atividade apresenta um código incompleto que 
deve ser preenchido corretamente para obter o resultado esperado.

---

#### Atividade 1 - Variáveis e Tipos de Dados
Complete as variáveis para que os console.log exibam os valores corretos.
```javascript
// Complete as variáveis para que os console.log exibam os valores corretos.
let nome = // Complete aqui (Ex: "Alice")
let idade = // Complete aqui (Ex: 25)
let cidade = // Complete aqui (Ex: "São Paulo")
console.log("Meu nome é " + nome + " e tenho " + idade + " anos. Moro em " + cidade + ".");
// Esperado: Meu nome é Alice e tenho 25 anos. Moro em São Paulo.
```
#### Atividade 2 - Condicionais (if/else)
Complete a estrutura if/else para verificar se a pessoa pode dirigir.
```javascript
let idade = // Complete aqui (Ex: 18)
if (/* Complete a condição */) {
 console.log("Pode dirigir!");
} else {
 console.log("Não pode dirigir.");
}
// Teste diferentes idades e veja o que acontece.
```
#### Atividade 3 - Loops (for)
Complete o for para exibir os números de 1 a 10 no console.
```javascript
for (let i = /* Complete aqui */; i <= /* Complete aqui */; i++) {
 console.log(i);
}
// Esperado: 1, 2, 3, ..., 10
```
#### Atividade 4 - Arrays e Laços (forEach)
Itere sobre um array e exiba seus valores no console.
```javascript
let frutas = ["Maçã", "Banana", "Uva", "Laranja"];
// Complete o forEach para exibir todas as frutas no console
frutas.forEach(function(/* Complete aqui */) {
 console.log(/* Complete aqui */);
});
// Esperado: Maçã, Banana, Uva, Laranja
```
#### Atividade 5 - Funções
Complete a função para calcular o dobro de um número.
```javascript
function dobro(/* Complete aqui */) {
 return /* Complete aqui */;
}
console.log(dobro(5)); // Esperado: 10
console.log(dobro(10)); // Esperado: 20
```
#### Atividade 6 - Manipulação de Strings
Complete o código para transformar uma string em maiúsculas.
```javascript
let texto = "aprendendo javascript!";
let textoMaiusculo = /* Complete aqui */;
console.log(textoMaiusculo);
// Esperado: "APRENDENDO JAVASCRIPT!"
```
#### Atividade 7 - Manipulação de Objetos
Crie um objeto `pessoa` e acesse suas propriedades.
```javascript
let pessoa = {
 nome: /* Complete aqui */,
 idade: /* Complete aqui */,
 cidade: /* Complete aqui */
};
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Cidade: " + pessoa.cidade);
```
#### Atividade 8 - Classes e Objetos em JavaScript
Crie uma classe `Carro`, instancie objetos dela e exiba seus atributos no console.
```javascript
// Definição da classe Carro
class Carro {
 constructor(/* Complete aqui */) {
 this.marca = /* Complete aqui */;
 this.modelo = /* Complete aqui */;
 this.ano = /* Complete aqui */;
 }
 // Método para exibir informações do carro
 exibirInfo() {
 console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
 }
}
// Criando um novo objeto da classe Carro
let meuCarro = new Carro(/* Complete aqui */);
// Chamando o método para exibir informações
meuCarro.exibirInfo();
// Esperado: Carro: Toyota Corolla, Ano: 2022 (ou outros valores que o aluno escolher)
```