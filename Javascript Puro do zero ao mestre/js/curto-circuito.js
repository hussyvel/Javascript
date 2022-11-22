/*let n = 1;

if(!n){
    n = 10

}*/

let n = 1

n = n || 10

console.log(n)




let isValid = false

isValid || console.log("não é valido")

isValid && console.log("é valido")

//**************************** */

let teste = 0

//teste = "ola" && 0
//teste = "ola" || 0
//teste = "ola" && "mundo"
teste = "ola" || "mundo"

console.log(teste)

function imprimeZeroOuArgumento(n){
    n = n || 0;
    console.log(n)
}
imprimeZeroOuArgumento(1)
imprimeZeroOuArgumento()
imprimeZeroOuArgumento(0)