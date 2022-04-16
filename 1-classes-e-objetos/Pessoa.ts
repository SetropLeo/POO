export default class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

let pessoa1 = new Pessoa('Leo', 19);

console.log(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}`);
