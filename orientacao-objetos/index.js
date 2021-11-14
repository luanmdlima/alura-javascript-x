// import { Cliente } from "./Cliente.js";
// import { ContaPoupanca } from "./ContaPoupanca.js";
// import { ContaCorrente } from "./ContaCorrente.js";
// import { ContaSalario } from "./ContaSalario.js";

// const cliente1 = new Cliente("Ricardo", 11122233309);
// const cliente2 = new Cliente("Alice", 88822233309);
// const cliente3 = new Cliente("Suzana", 1223334444);

// const conta1 = new ContaCorrente(1001, cliente1);
// const conta2 = new ContaPoupanca(102, cliente2);
// const conta3 = new ContaSalario(125, cliente3);

// conta3.depositar(500);
// conta3.sacar(100);

// console.log(conta1);
// console.log(conta2);
// console.log(conta3);

import { Diretor } from "./funcionario/Diretor.js";
import { Gerente } from "./funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const funcionario1 = new Diretor("Ricardo", 11122233309, 1000.0);
const funcionario2 = new Gerente("Alice", 88822233309, 2500.0);

funcionario1.cadastrarSenha(1223334444);
funcionario2.cadastrarSenha(4444333221);

console.log(funcionario1);
console.log(funcionario2);

console.log(SistemaAutenticacao.login(funcionario1, 4444333221));
console.log(SistemaAutenticacao.login(funcionario2, 4444333221));
