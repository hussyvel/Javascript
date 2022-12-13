const produto = {
    nome: "lápis",
    qtd: 50,
    comprar: function(n){
        if(n > this.qtd){
            return "quantidade indisponível"
        }
        this.qtd -= n
    },
    teste1: function(){
        console.log("teste 1")
        console.log(this)//mostra o objeto apontado no caso comprar
    },
    teste2:()=>{
        console.log("teste2")
        console.log(this)
    }
}

produto.comprar(15)
console.log(produto)

produto.teste1()

produto.teste2()