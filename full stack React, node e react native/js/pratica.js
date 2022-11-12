let peso;
let altura;
let imc;
let resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso /(altura * altura);
    
    if(resultado < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Seu resultado foi ' + imc + '<br> Cuidado você está muito abaixo do peso'
    }
}