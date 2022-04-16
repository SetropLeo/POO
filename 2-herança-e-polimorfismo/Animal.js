"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CLASSE BASE
class Animal {
    constructor(tipo, nome, idade) {
        this.tipo = tipo;
        this.nome = nome;
        this.idade = idade;
    }
    comunicar() {
        console.log('Método da classe base');
    }
}
exports.default = Animal;
// CLASSE QUE HERDA
class Cachorro extends Animal {
    constructor(tipo, nome, idade, raça) {
        super(tipo, nome, idade);
        this.raça = raça;
    }
    latir() {
        super.comunicar();
    }
}
// CLASSE QUE HERDA
class Individuo extends Animal {
    constructor(tipo, nome, idade, cor) {
        super(tipo, nome, idade);
        this.cor = cor;
    }
    gritar() {
        super.comunicar();
    }
}
// INSTANCIA CLASSE CACHORRO
let cachorro1 = new Cachorro('cachorro', 'Doby', 4, 'salsicha');
cachorro1.latir();
// INSTANCIA CLASSE INVIDIDUO
let individuo1 = new Individuo('pessoa', 'Leo', 19, 'branco folha a4');
individuo1.gritar();
