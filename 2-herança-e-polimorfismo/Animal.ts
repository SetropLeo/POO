// CLASSE BASE
export default class Animal {
  public tipo: string;
  public nome: string;
  public idade: number;

  constructor(tipo: string, nome: string, idade: number) {
    this.tipo = tipo;
    this.nome = nome;
    this.idade = idade;
  }

  protected comunicar(): void {
    console.log('Método da classe base');
  }
}

// CLASSE QUE HERDA
class Cachorro extends Animal {
  public raça: string;

  constructor(tipo: string, nome: string, idade: number, raça: string) {
    super(tipo, nome, idade);
    this.raça = raça;
  }

  public latir(): void {
    super.comunicar();
  }
}

// CLASSE QUE HERDA
class Individuo extends Animal {
  public cor: string;

  constructor(tipo: string, nome: string, idade: number, cor: string) {
    super(tipo, nome, idade);
    this.cor = cor;
  }

  public gritar(): void {
    super.comunicar();
  }
}

// INSTANCIA CLASSE CACHORRO
let cachorro1 = new Cachorro('cachorro', 'Doby', 4, 'salsicha');
cachorro1.latir();

// INSTANCIA CLASSE INVIDIDUO
let individuo1 = new Individuo('pessoa', 'Leo', 19, 'branco folha a4');
individuo1.gritar();
