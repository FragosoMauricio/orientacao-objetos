import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {

    #taxa = 0.01;

    sacar(valor) {
        const valorSacar = valor + this.#taxa;
        return super.sacar(valorSacar);
    }
}
