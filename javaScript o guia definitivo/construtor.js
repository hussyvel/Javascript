class Pessoa{

    constructor(nome, cpf, data){
        this.nome = nome;
        this.cpf = cpf;
        this.data = data;

        console.log('construtor executado')
    }
    
}

const pi = new Pessoa('Hussyvel', '02160891312', '04/06/1988');

console.log(pi.nome, pi.cpf, pi.data)