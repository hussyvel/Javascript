let idade = 18;
let paisPresentes = false;
let comprouBilhete = true;

let podeViajar = idade >= 18 || paisPresentes && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`)

let msgMaiorIdade = (idade >= 18)? "true" : "false" 


if(!comprouBilhete){
    console.log("Não Comprou o bilhete")
} else {
    console.log(msgMaiorIdade)
}

let n1 = 8
let n2 = 5
let media = (n1 + n2) / 2

if(n1 === 0 || n2 === 0){
    console.log(`Reprovado`)
}else if(media < 7){
    console.log(`Em recuperação`)
}else{
    console.log(`Aprovado`)
}