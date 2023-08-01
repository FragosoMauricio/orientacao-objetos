"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    //private nome: string;
    //private cpf: string;
    //private idade: number;
    //private sexo: string;
    function Pessoa(nome, cpf, idade, sexo) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
    }
    //métodos
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.getSexo = function () {
        return this.sexo;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
