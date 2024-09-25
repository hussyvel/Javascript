function alteraArray(a){
    a.push("Adicionar")
}

let arr = ["a"]

console.log(arr)

alteraArray(arr)

console.log(arr)


//*************************** */

function alterarPrimitivo(p){
    p += " adicionado"
    console.log("Dentro da função " + p)
}

let msg = "mensagem"

console.log(msg)

alterarPrimitivo(msg)

console.log(msg)