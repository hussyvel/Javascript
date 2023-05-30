const fs = require('fs');

let numbers = [];

// Gerar uma lista de 500 números aleatórios entre 100000 e 999999
for (let i = 0; i < 500; i++) {
  numbers.push(Math.floor(Math.random() * 900000) + 100000);
}

// Escrever a lista de números em um arquivo TXT
fs.writeFileSync('numbers.txt', numbers.join(', '));

// Lê os números do arquivo TXT e conta quantos são divisíveis por 7
let count = 0;
let data = fs.readFileSync('numbers.txt', 'utf8');
let nums = data.split(', ');
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 7 === 0) {
    count++;
  }
}

console.log(`Quantidade de números divisíveis por 7: ${count}`);
