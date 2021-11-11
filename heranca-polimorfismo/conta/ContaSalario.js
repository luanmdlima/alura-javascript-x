import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(agencia, cliente) {
    super(agencia, cliente);
  }

  sacar(valor) {
    const taxa = 1;
    return this._sacar(taxa, valor);
  }
}
