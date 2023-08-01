export class Pessoa {

    //private nome: string;
    //private cpf: string;
    //private idade: number;
    //private sexo: string;


    constructor ( private nome: string,
                  private cpf: string,
                  private idade: number,
                  private sexo: string) {
                      this.nome = nome;
                      this.cpf = cpf;
                      this.idade = idade;
                      this.sexo = sexo;

                  }

        //métodos
        getNome (): string {
            return this.nome;
        }
        
        getCpf (): string {
            return this.cpf;
        }
        
        getIdade (): number {
            return this.idade;
        }

        getSexo (): string {
            return this.sexo;

        }

}