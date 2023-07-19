//classe é para criar modelos, aqui no caso de conta bancaria.

export class conta {
    
    //definindo atributos, quando usamos os atributos no construtor nao precisa declarar osatributos em outro lugar
    /*saldo;
    agencia;
    numero;
    titular;*/

    //definindo o construtor
    constructor(agencia, numero, titular){
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
    }

    //definindo metodos
    depositar(valor){
        if (valor > 0) {
        this.saldo += valor; 
        }
    }

    sacar(valor){
        podeSacar = valor > 0 && valor <= this.saldo;
        if (podeSacar) {
        this.saldo -= valor; 
        }
    }

    transferir(contaDestino, valor) {
        podetransferir = valor > 0 && valor <= this.saldo;
        if(podetransferir) {
            this.salda -= valor;
            contaDestino.saldo += valor;
        }
    }

}