"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompraCarro {
    constructor(cliente, funcionario, carro) {
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.carro = carro;
        this.preçoFinal = this.darDesconto(this.carro.getValor());
        this.funcionario.setComissao(this.addComissao(this.preçoFinal));
        this.valorComDesconto = 0;
    }
    darDesconto(preço) {
        if (this.carro.getAno() < 2000) {
            this.valorComDesconto = (this.carro.getValor() * 90) / 100;
            this.preçoFinal = this.valorComDesconto;
        }
        else {
            this.preçoFinal = preço;
        }
        if (this.cliente.getRenda() < 5000) {
            this.valorComDesconto = (this.preçoFinal * 90) / 100;
            this.preçoFinal = this.valorComDesconto;
        }
        else {
            this.preçoFinal = this.preçoFinal;
        }
        return this.preçoFinal;
    }
    addComissao(valor) {
        this.funcionario.setComissao(valor * 0.02);
        return this.funcionario.getComissao();
    }
    detalharCompra() {
        return console.log(`
      Cliente: ${this.cliente.getNome()}
      Carro: ${this.carro.getModelo()}, Ano: ${this.carro.getAno()}, Valor: ${this.carro.getValor()}
      Preço Final: ${this.preçoFinal}
      Funcionário: ${this.funcionario.getNome()}, Comissão: ${this.funcionario.getComissao()}
    `);
    }
}
exports.default = CompraCarro;
