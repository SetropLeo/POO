abstract class Gato {
  nome: string;
  cor: string;

  constructor(nome: string, cor: string) {
    this.nome = nome;
    this.cor = cor;
  }

  miar() {
    console.log('miau!');
  }
}

class Tobias extends Gato {
  idade: number;

  constructor(nome: string, cor: string, idade: number) {
    super(nome, cor);
    this.idade = idade;
  }
}

// NÃO SE INSTANCIA MAIS DE GATO MAS, SIM, DA CLASSE ESTENDIDA
const gato = new Tobias('Zulu', 'Branco', 2);
console.log(gato.nome, gato.cor, gato.idade);
gato.miar();
