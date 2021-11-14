import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(agencia, cliente) {
    super(agencia, cliente);
  }

  sacar(valor) {
    const taxa = 1.02;
    return this._sacar(taxa, valor);
  }
}
