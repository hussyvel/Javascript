let diaDaSemana = 3

if(diaDaSemana === 0){
    console.log("Domingo")
}else if(diaDaSemana === 1){
    console.log("Segunda")
}else if(diaDaSemana === 2){
    console.log("terça")
}else if(diaDaSemana === "3"){
    console.log("quarta")
}else if(diaDaSemana === 4){
    console.log("quinta")
}else if(diaDaSemana === 5){
    console.log("sexta")
}else if(diaDaSemana === 6){
    console.log("sabado")
}else{
    console.log("nenhum dia")
}



let dia = " "

switch(diaDaSemana){
    case 0:
        dia="Domingo"
        break;
    case 1:
        dia="Segunda"
        break;
    case 2:
        dia="Terça"
        break;
    case 3:
        dia="Quarta"
        break;
    case 4: 
        dia = "Quinta"
        break;
    case 5:
        dia = "Sexta"
        break;
    case 6:
        dia = "Sabado"
        break;
    default:
        dia = "--"; 
}

console.log(`${dia}`)