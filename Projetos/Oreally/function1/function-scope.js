let convertFarenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9


    if (celsius <= 0) {
        let estaFrio = true
        console.log(estaFrio)
    }

    return celsius
}

let tempoOne = convertFarenheitToCelsius(32)
let tempoTwo = convertFarenheitToCelsius(68)


console.log(tempoOne)
console.log(tempoTwo)