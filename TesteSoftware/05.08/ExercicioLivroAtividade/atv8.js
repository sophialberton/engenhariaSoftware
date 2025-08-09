class Carro {
 constructor(marca, modelo, ano) {
 this.marca = marca;
 this.modelo = modelo;
 this.ano = ano;
 }

 exibirInfo() {
 console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
 }

}
let meuCarro = new Carro("Honda","Civic",2005);

meuCarro.exibirInfo();