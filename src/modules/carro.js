export class Carro {

    //atributos
    marca;
    modelo;
    ano;
    velocidade = 0;
    estado = false;

    //construtor
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;

    }
    //metodos

    ligar() {
        if (this.estado == false) {
            this.estado == true;
            //this.velocidade = 0;
        }
    }

    acelerar() {
        //aumente a velocidade em 10km/h
        if (this. estado == true && this.velocidade < 200) {
            this.velocidade += 10;
        }
    }

    frear() {
        if (this.estado == true && this.velocidade > 0) {
            this.velocidade -= 10;
        }
    }

    desligar() {
        if (this.estado == ture && this.velocidade <= 10) {
            this.estado = false;
            this.velocidade = 0;
        } else {
            console.log(`Não é possivel desligar o carro`);
        }
    }

}
