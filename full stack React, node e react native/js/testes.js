let peso;
let altura;
let imc;
let resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    
    imc = peso / (altura * altura)

    resultado = document.getElementById('resultado')

    if(imc < 17){
        resultado.innerHTML = `<br/> O seu resultado é ${imc}`;  
    }
}