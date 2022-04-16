export default class Carro {
  modelo: string;
  ano: number;
  valor: number;

  constructor(modelo: string, ano: number, valor: number) {
    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;
  }

  public getModelo() {
    return this.modelo;
  }

  public setModelo(modelo: string) {
    this.modelo = modelo;
  }

  public getAno(): number {
    return this.ano;
  }

  public setAno(ano: number) {
    this.ano = ano;
  }

  public getValor(): number {
    return this.valor;
  }

  public setValor(valor: number) {
    this.valor = valor;
  }
}
