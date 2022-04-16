"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jerry {
    constructor(nome) {
        this.nome = nome;
    }
    fugir() {
        console.log('Corre, lá vem o Tom');
    }
}
let rato = new Jerry('Jerry');
rato.idade = 1;
console.log(rato.idade);
