const produto = {
    nome: "caneta",
    qtd: 10,
    comprar(n){ /*metodo comprar recebe uma função*/
        console.log(this)
        if(n > this.qtd){
            return "quantidade não disponível" /*a palavra retun vai sair da função*/
        }
        this.qtd -= n
    }
}

produto.comprar(23)
console.log(produto)