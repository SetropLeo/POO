"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(modelo, ano, valor) {
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
}
exports.default = Carro;
