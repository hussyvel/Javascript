function generateRandomNumber(max){
    return parseInt(Math.random() * max)
}

let arr = []

while(arr.length <= 10 - 1){
    let teste = generateRandomNumber(10)

    if(arr.indexOf(teste) <= 0){
        arr.push(teste)
    }else{
        console.log(teste, "esse número é repetido")
    }
}

console.log(arr)