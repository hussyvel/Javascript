<<<<<<< HEAD
const somar = function Soma() {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
=======
const somar = () => {
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.lenght; i++){
>>>>>>> a074bf5f395480af231059d4efdcfd1397e6b71c
        total += arguments[i]
    }
    return total
}
<<<<<<< HEAD

console.log(somar.name)
//console.log(somar(1, 2, 3, 4, 5))
=======
console.log(somar([1, 2, 3]))
console.log(somar(1, 2, 3, 4, 5, 6))
>>>>>>> a074bf5f395480af231059d4efdcfd1397e6b71c
