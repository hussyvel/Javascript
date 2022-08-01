let array = []
let valor = prompt("Digite um valor")
function produto(v){
    let resultado = 1;
    for(let valor = 0; valor < v.length; valor++) 
    
    resultado *= v[valor];
    
    return resultado;
 }
 

//console.log(produto([1, 2, 5, 7]));