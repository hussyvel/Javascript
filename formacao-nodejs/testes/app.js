let calcular = require("../calculadora");

console.log(calcular.soma(90, 40))
console.log(calcular.div(90, 2))
console.log(calcular.mult(45, 8))
console.log(calcular.sub(80, 50))

calcular.nome = "Calculadora usando módulos"
console.log(calcular.nome)






