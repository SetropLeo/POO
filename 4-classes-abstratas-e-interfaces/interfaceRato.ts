export default interface Rato {
  nome: string;
  idade?: number | string;
  fugir(): void;
}

class Jerry implements Rato {
  nome: string;
  idade?: number | string;

  constructor(nome: string) {
    this.nome = nome;
  }

  fugir() {
    console.log('Corre, lá vem o Tom');
  }
}

let rato = new Jerry('Jerry');
rato.idade = 1;
console.log(rato.idade);
