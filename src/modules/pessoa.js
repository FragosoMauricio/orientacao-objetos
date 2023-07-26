export class Pessoa {
    //atributos da classe
    #nome;
    #cpf;
    #idade;
    #sexo;
    
    //definindo o construtor
    constructor(nome, cpf, idade, sexo){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#idade = idade;
        this.#sexo = sexo;
    }
    
    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get idade() {
        return this.#idade;
    }

    get sexo() {
        return this.#sexo;
    }
}