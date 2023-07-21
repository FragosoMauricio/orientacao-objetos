import { ContaCorrente } from './modules/conta-corrente.js';
import { conta } from  './modules/conta.js';

//instanciando objeto conta.
const contaTiago = new conta(`123`, `12345`, `Thiago`);
contaTiago.depositar(1000);
   

const contaMarcos = new ContaCorrente(`123`, `123456`, `Marcos`);
contaMarcos.depositar(1000);

//quando tornarmos os atributos privados "#" estamos fazendo uma boa prática pois não da
//liberdado para o programador alterar as infos de fora da classe.
//contaMarcos.#saldo = 20000;

contaMarcos.transferir(contaTiago, 100);
console.log(contaTiago);
console.log(contaMarcos);