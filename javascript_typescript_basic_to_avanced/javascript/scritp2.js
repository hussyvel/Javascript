let varA= 'A';
let varB= 'B';
let varC= 'C';

console.log('Before swap: ', varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log('After swap: ', varA, varB, varC);

