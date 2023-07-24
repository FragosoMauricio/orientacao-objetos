export class Bola {
    //a classe é para criar modelos, aqui no caso de uma bola.

    cor;
    circunferencia;
    material;
    

    //constructor
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    //metodo
    trocaCor(novaCor){
        this.cor = novaCor;
    }

    /*mostraCor() {
        console.log(`A cor da bola é: ${this.cor}.`);
    }*/

    trocaMaterial(novoMaterial){
        this.material = novoMaterial;
    }

    trocaCircunferencia(novaCircunferencia){
        this.circunferencia =novaCircunferencia;
    }
}