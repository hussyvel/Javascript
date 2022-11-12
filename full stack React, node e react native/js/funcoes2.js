function mediaAluno(nota1, nota2){
    let media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Aluno aprovado com média " + media)
    }else if(media < 7){
        console.log("Aluno reprovado com média " + media)
    }
}

let result = mediaAluno(7,7)
console.log(result)