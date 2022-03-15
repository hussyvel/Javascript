//multiple arguments
let soma = function(x, y, z){
    return x + y + z
}

let resultado = soma(5,8,15)
console.log(resultado)

//default arguments
let getScoreText = function (name = 'Anonymous', score = 0){
    return `Name ${name} - Score: ${score}`
}

let score = getScoreText(undefined, 1000)
console.log(score)


//Challeng area
//A 25% tip on $40 would be $10
let getTip = function(total, tipPercent = .2){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(60)
console.log(tip)