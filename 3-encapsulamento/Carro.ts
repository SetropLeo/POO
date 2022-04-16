class Carro {
  private cor: string;
  private ano: number;
  private valor: number;

  constructor(cor: string, ano: number, valor: number) {
    this.cor = cor;
    this.ano = ano;
    this.valor = valor;
  }

  public getCor() {
    return this.cor;
  }

  public getAno() {
    return this.ano;
  }

  public getValor() {
    return this.valor;
  }

  private getInfo() {
    console.log(`${this.cor}, ${this.ano}, ${this.valor}`);
  }

  public getLogs() {
    console.log('Seguem os logs abaixo:');
    this.getInfo();
  }

  public setCor(cor: string) {
    this.cor = cor;
    return 'A sua nova cor é:' + this.cor;
  }

  public setValor(valor: number) {
    this.valor = valor;
    return 'O valor atualizado é:' + this.valor;
  }
}

let carro1 = new Carro('Branco', 2020, 180000);
carro1.setCor('Preto');
console.log(carro1.getCor());
carro1.getLogs();
