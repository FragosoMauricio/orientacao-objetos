import { conta } from "./conta.js";

export class ContaCorrente extends conta {}

    taxa = 0.01;

    StaticRange(valor){
        const valorSacar = valor + this.taxa;
        return super.sacar(valorSacar);
    }

    