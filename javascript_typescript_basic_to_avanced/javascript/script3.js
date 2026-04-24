// let text = "Um \"texto\"";

// let text = "um \texto";

// let text = "um \\texto";

let text = "um texto";

// console.log(text[4]);
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(4));

// console.log(text.concat(" de exemplo"));
// console.log(text + " de exemplo");

// console.log(`${text} de exemplo`);
// console.log(text.indexOf('m', 4));

// console.log(text.slice(3, 6));
console.log(text.split(' '));
console.log(text.replace('um', 'outro'));
console.log(text.replaceAll('um', 'outro'));
console.log(text.includes('um'));
console.log(text.startsWith('um'));
console.log(text.endsWith('texto'));    
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text.repeat(3, ' '));
console.log(text.substring(3, 6));
console.log(text.match(/[a-z]/g));



