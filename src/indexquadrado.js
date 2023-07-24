import { Quadrado } from "./modules/quadrado.js";

const meuQuadrado = new Quadrado(5);

console.log('Valor do lado do quadrado:', meuQuadrado.retornarValorLado()); // Output: Valor do lado do quadrado: 5

meuQuadrado.mudarValorLado(7);
console.log('Novo valor do lado do quadrado:', meuQuadrado.retornarValorLado()); // Output: Novo valor do lado do quadrado: 7

console.log('Área do quadrado:', meuQuadrado.calcularArea()); // Output: Área do quadrado: 49
