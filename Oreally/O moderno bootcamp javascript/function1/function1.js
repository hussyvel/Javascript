//function - input (argument), code, output, (return value)

let greetUser = function(){
    console.log("Seja bem vindo!!!")
}

greetUser()
greetUser()

let square = function(num){
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(otherValue)
console.log(value)

//Challenge Area

//convertFahrenheitToCelsius

let temperatura = function(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9
    return celsius 
}

let one = temperatura(32)
let two = temperatura(10)

console.log(one)
console.log(two)
//Call a couple of times (32 -> 0) (68 -> 20)


