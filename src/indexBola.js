import {Bola} from './modules/bola.js'

const novaBola = new Bola (`verde`, 10, `vidro`);
console.log(novaBola);
//minhaBola.mostrarCor();

novaBola.trocaCor(`Azul`);
console.log(novaBola);
//minhaBola.mostrarCor();

novaBola.trocaCor(`Cinza`);
console.log(novaBola);

novaBola.trocaMaterial(`Couro`);
console.log(novaBola);

novaBola.trocaCircunferencia(20);
console.log(novaBola);

