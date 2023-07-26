import { ContaCorrente } from './modules/conta-corrente.js';
import { ContaPoupanca } from './modules/conta-poupanca.js';
import { Conta } from  './modules/conta.js';
import { Pessoa } from './modules/pessoa.js';

const ramon = new Pessoa(`Ramon`, `12345678912`, 39, `M`);
const contaRamon = new ContaCorrente(123, 1234, ramon);

const mauricio = new Pessoa(`Mauricio`, `12345678912`, 35, `M`);
const contaMauricio = new ContaPoupanca (412, 36, mauricio);


contaRamon.depositar(3000);
contaMauricio.depositar(2500);

contaRamon.transferir(contaMauricio, 1000);

window.alert(contaRamon);
window.alert(contaMauricio);



/*//instanciando objeto conta.
const thiago = new Pessoa ("Thiago", "12345678992", 30, "M");
const contaTiago = new conta(123, 12345, thiago);
const contaTiago = new ContaPoupanca();

//contaTiago.depositar(1000);

window.alert(contaTiago.titular.nome);
console.log(contaTiago.titular.nome);*/



/*const contaMarcos = new ContaCorrente(`123`, `123456`, `Marcos`);
contaMarcos.depositar(1000);

//quando tornarmos os atributos privados "#" estamos fazendo uma boa prática pois não da
//liberdado para o programador alterar as infos de fora da classe.
//contaMarcos.#saldo = 20000;

contaMarcos.transferir(contaTiago, 100);
console.log(contaTiago);
console.log(contaMarcos);*/