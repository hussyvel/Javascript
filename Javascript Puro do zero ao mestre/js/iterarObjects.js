const pessoa = {
    nome: "Hussyvel",
    idade:34,
    email:"hussyribeiro@hotmail.com",
    city:"São Luís"
}

console.log(pessoa)

for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}