let a = 10
let b = 10
console.log(a === b) //passagem de dados por valor ou seja, foi copiado

let c = {
    x:1
}

let d = {
    y: 5
}
console.log(c === d)


let e ={
    x:1
}

let f = {}
e = f

console.log(e === f)// as duas são ponteiros pois apontam para a mesma local reservado na memória



