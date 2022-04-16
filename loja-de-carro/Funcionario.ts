export default class Funcionario {
  nome: string;
  comissao: number = 0;

  constructor(nome: string) {
    this.nome = nome;
  }

  public getNome() {
    return this.nome;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }

  public getComissao() {
    return this.comissao;
  }

  public setComissao(comissao: number) {
    this.comissao = comissao;
  }
}
