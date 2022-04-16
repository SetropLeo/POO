import Carro from "./Carro/Carro";
import Cliente from "./Cliente/Cliente";
import CompraCarro from "./Compra/CompraCarro";
import Funcionario from "./Funcionario/Funcionario";

let carro = new Carro('Civic SI', 1999, 10000);

let cliente = new Cliente('Leo', 1500);

let funcionario = new Funcionario('Joao');

let compra = new CompraCarro(cliente, funcionario, carro);
console.log(compra.detalharCompra());