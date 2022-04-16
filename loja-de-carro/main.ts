import Carro from "./Carro";
import Cliente from "./Cliente";
import CompraCarro from "./CompraCarro";
import Funcionario from "./Funcionario";

let carro = new Carro('Civic SI', 1999, 10000);

let cliente = new Cliente('Leo', 1500);

let funcionario = new Funcionario('Joao');

let compra = new CompraCarro(cliente, funcionario, carro);
console.log(compra.detalharCompra());