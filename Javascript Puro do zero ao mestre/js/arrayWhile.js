//criar um array com números randômicos sem repetição
function generateRandomNumber(max){
    return parseInt(Math.random() * max)
}

let arr =[]
let i = 0
while(arr.length <= 10){
    i++
    let teste = generateRandomNumber(30)

    if(arr.indexOf(teste) < 0){
        arr.push(teste)
    }else{
        console.log(teste, " já existe no array")
    }
}

console.log(arr)
console.log("O loop foi executado", i, " vezes")