<<<<<<< HEAD
const teste = function Somar(){
    console.log(array)
    let total = 0;
    for (let index = 0; index < array.length; index++) {
        total += array[index]
    }

    return total
}

console.log(teste.name)
=======
function somar() {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5))


  
>>>>>>> a074bf5f395480af231059d4efdcfd1397e6b71c
