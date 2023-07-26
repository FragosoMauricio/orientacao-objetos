//classe é para criar modelos, aqui no caso de conta bancaria.

export class Conta {

    //definindo atributos, quando usamos os atributos no construtor nao precisa declarar osatributos em outro lugar
    /*saldo;
    agencia;
    numero;
    titular;*/

    #agencia;
    #numero;
    #titular;
    #saldo = 0;

    //definindo o construtor
    constructor(agencia, numero, titular) {
        this.#agencia = agencia;
        this.#numero = numero;
        this.#titular = titular;
    }

    //definindo metodos
    get agencia() {
        return this.#agencia;
    }

    set agencia(novaAgencia) {
        this.#agencia = novaAgencia;
    }

    get numero() {
        return this.#numero;
    }

    set numero(novoNumero) {
        this.#numero = novoNumero;
    }

    get titular() {
        return this.#titular;
    }

    set titular(novoTitular) {
        if (novoTitular === ``) {
            throw new Error(`Titular não pode ser em branco`);
        }
        this.#titular = novoTitular;
    }

    get saldo() {
        return this.#saldo;
    }


    depositar(valor) {
        const podeDepositar = valor > 0;
        if (podeDepositar) {
            this.#saldo += valor;
            return true;
        }
        return false;
    }

    sacar(valor) {
        const podeSacar = valor > 0 && valor <= this.#saldo;
        if (podeSacar) {
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    transferir(contaDestino, valor) {
        const podeTransferir = this.sacar(valor);
        if (podeTransferir) {
            return contaDestino.depositar(valor);
        }
        return false;
    }

    toString(){
        return `Agencia: ${this.agencia}, 
                conta: ${this.numero},
                titular: ${this.titular.nome}, 
                Saldo: ${this.saldo.toFixed(2)}`;
    }
}