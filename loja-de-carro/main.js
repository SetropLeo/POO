"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro/Carro"));
const Cliente_1 = __importDefault(require("./Cliente/Cliente"));
const CompraCarro_1 = __importDefault(require("./Compra/CompraCarro"));
const Funcionario_1 = __importDefault(require("./Funcionario/Funcionario"));
let carro = new Carro_1.default('Civic SI', 1999, 10000);
let cliente = new Cliente_1.default('Leo', 1500);
let funcionario = new Funcionario_1.default('Joao');
let compra = new CompraCarro_1.default(cliente, funcionario, carro);
console.log(compra.detalharCompra());
