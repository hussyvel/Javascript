const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao_1 = 9.87
const avaliacao_2 = 6.81

const total = avaliacao_1 * peso1 + avaliacao_2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //transforma o valor em até duas casas decimais
console.log(media.toString(2)) //transforma em um número binário
console.log(typeof media) //vê o tipo da variavel