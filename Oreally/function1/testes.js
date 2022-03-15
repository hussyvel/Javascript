let calculoPorcentagem = function(valor1, valor2){
    let percent = (valor1 / valor2) * 100
    let letra = ''

    if (percent >= 95) {
        letra = 'A'
    } else if(percent >= 80){
        letra = 'B'
    } else if(percent >= 60){
        letra = 'C'
    } else if(percent >= 30){
        letra = 'D'
    } else if(percent >= 10){
        letra = 'E'
    } else {
        letra = 'D'
    }
    return ` O resultado do calculo é ${percent} para percentual e letra ${letra}`

}

let resultado = calculoPorcentagem(9,20)
    console.log(resultado)













    