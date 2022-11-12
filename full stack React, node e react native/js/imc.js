let peso;
let altura;
let imc;
let resultado;

function calcular(event){
    event.preventDefault();
    
   peso = document.getElementById('peso').value;
 altura = document.getElementById('altura').value;

 imc = peso / (altura * altura)

 resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML = `<br/> O resultado do imc é ${imc} tome cuidado você está muito abaixo do peso `;

    }else if(imc > 17 && imc < 18.49){
        resultado.innerHTML = `<br/> O resultado do imc é ${imc} tome cuidado você está abaixo do peso`

    }else if(imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = `<br/> O resultado do imc é ${imc} sua saúde está boa, parabéns`

    }else if(imc >= 25 && imc <= 29.99){
        resultado.innerHTML = `<br/> O resultado do imc é ${imc} cuidado, você está acima do peso`
    }
    
    document.getElementById('peso').value ='';
    document.getElementById('altura').value ='';
}
