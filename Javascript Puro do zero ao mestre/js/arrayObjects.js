const nomes = ["Hussyvel", "João", ""]
const pessoa = {nome: "Edinara", idade: 0.6, email:"joao@hotmail.com"}
const pessoa1 = {}

const pessoas = [{
    nome: "Daniel",
    idade: 40
}, {
    nome: "João",
    idade: 18
}, {
    nome: "Edinara",
    idade: 33
}, {
    nome: "Hussyvel",
    idade: 34
}
]

/*for(let prop in pessoas){
    console.log(pessoas[0].nome + " possui " + pessoas[0].idade + " anos")
}
*/

for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos de idade`)
}


