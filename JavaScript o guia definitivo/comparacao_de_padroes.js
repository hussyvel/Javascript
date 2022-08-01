let text = "testing: 1,2,3";
let pattern = /\d+/g /*corresponde a todas as instâncias de um ou mais dígitos*/

console.log(pattern.test(text))/*verdadeiro: existe uma correspondência*/
console.log(text.search(pattern)) /*9: posição da primeira correspondência*/
console.log(text.match(pattern)) /*array de todas as correspondências*/
console.log(text.replace(pattern, "H"))
console.log(text.split(/\D+/))