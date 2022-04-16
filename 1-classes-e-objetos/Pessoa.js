"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
exports.default = Pessoa;
let pessoa1 = new Pessoa('Leo', 19);
console.log(`Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}`);
