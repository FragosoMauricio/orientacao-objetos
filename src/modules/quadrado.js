export class Quadrado {


    constructor(tamanhoLado){
        this.tamanhoLado = tamanhoLado;
    }

    mudarValorLado(novoLado){
        this.tamanhoLado = novoLado;
    }

    retornarValorLado(){
        return this.tamanhoLado;
    }

    calcularArea(){
        this.tamanhoLado * this.retornarValorLado;
    }
}