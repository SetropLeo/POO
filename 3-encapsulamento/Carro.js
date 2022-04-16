"use strict";
class Carro {
    constructor(cor, ano, valor) {
        this.cor = cor;
        this.ano = ano;
        this.valor = valor;
    }
    getCor() {
        return this.cor;
    }
    getAno() {
        return this.ano;
    }
    getValor() {
        return this.valor;
    }
    getInfo() {
        console.log(`${this.cor}, ${this.ano}, ${this.valor}`);
    }
    getLogs() {
        console.log('Seguem os logs abaixo:');
        this.getInfo();
    }
    setCor(cor) {
        this.cor = cor;
        return 'A sua nova cor é:' + this.cor;
    }
    setValor(valor) {
        this.valor = valor;
        return 'O valor atualizado é:' + this.valor;
    }
}
let carro1 = new Carro('Branco', 2020, 180000);
carro1.setCor('Preto');
console.log(carro1.getCor());
carro1.getLogs();
