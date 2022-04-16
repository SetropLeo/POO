"use strict";
class Gato {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
    miar() {
        console.log('miau!');
    }
}
class Tobias extends Gato {
    constructor(nome, cor, idade) {
        super(nome, cor);
        this.idade = idade;
    }
}
// NÃO SE INSTANCIA MAIS DE GATO MAS, SIM, DA CLASSE ESTENDIDA
const gato = new Tobias('Zulu', 'Branco', 2);
console.log(gato.nome, gato.cor, gato.idade);
gato.miar();
