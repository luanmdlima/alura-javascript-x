import { Cliente } from "./../Cliente.js";

export class Conta {
  constructor(agencia, cliente) {
    if (this.constructor == Conta) {
      throw new Error("A classe Conta não deve ser instanciada.");
    }

    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = 0;
  }

  get cliente() {
    return this._cliente;
  }
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get saldo() {
    return this._saldo;
  }

  _sacar(taxa, valor) {
    valor *= taxa;
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  sacar(valor) {
    throw new Error(
      "O método sacar é abstrato, portanto deve ser implementado nas classes filhas de Conta."
    );
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
