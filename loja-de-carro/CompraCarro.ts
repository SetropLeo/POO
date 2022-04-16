import Carro from './Carro';
import Cliente from './Cliente';
import Funcionario from './Funcionario';

export default class CompraCarro {
  cliente: Cliente;
  funcionario: Funcionario;
  carro: Carro;
  preçoFinal: number;
  valorComDesconto: number;

  constructor(cliente: Cliente, funcionario: Funcionario, carro: Carro) {
    this.cliente = cliente;
    this.funcionario = funcionario;
    this.carro = carro;
    this.preçoFinal = this.darDesconto(this.carro.getValor());
    this.funcionario.setComissao(this.addComissao(this.preçoFinal));
    this.valorComDesconto = 0;
  }

  private darDesconto(preço: number): number {
    if (this.carro.getAno() < 2000) {
      this.valorComDesconto = (this.carro.getValor() * 90) / 100;
      this.preçoFinal = this.valorComDesconto;
    } else {
      this.preçoFinal = preço;
    }

    if (this.cliente.getRenda() < 5000) {
      this.valorComDesconto = (this.preçoFinal * 90) / 100;
      this.preçoFinal = this.valorComDesconto;
    } else {
      this.preçoFinal = this.preçoFinal;
    }
    return this.preçoFinal;
  }

  public addComissao(valor: number): number {
    this.funcionario.setComissao(valor * 0.02);
    return this.funcionario.getComissao();
  }

  public detalharCompra() {
    return console.log(`
      Cliente: ${this.cliente.getNome()}
      Carro: ${this.carro.getModelo()}, Ano: ${this.carro.getAno()}, Valor: ${this.carro.getValor()}
      Preço Final: ${this.preçoFinal}
      Funcionário: ${this.funcionario.getNome()}, Comissão: ${this.funcionario.getComissao()}
    `);
  }
}
