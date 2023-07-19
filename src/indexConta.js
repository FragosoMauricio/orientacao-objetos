import { conta } from  './modules/conta.js';

//instanciando objeto conta.
const contaTiago = new conta(`123`, `12345`, `Thiago`);
if (contaTiago.depositar(5000)){
    console.log(`Deposito realizado com sucesso`);
} else{
    console.log(`Deposito não realizado com sucesso`);
}

const contaMarcos = new conta(`123`, `12345`, `Thiago`);
contaMarcos.depositar(1000);

console.log(contaTiago);
console.log(contaMarcos);



