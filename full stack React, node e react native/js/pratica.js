let var1 = document.getElementById('div')

function entrar(){
    let nome = prompt("Qual o seu nome?");

    if(nome === ' ' || nome === null){
        alert("opa, aqui deu ruim")
        var1.innerHTML = "Bem vindo " + nome;
    }else{
        alert("Deu certo")
        var1.innerHTML = "Bem vindo " + nome;
        
        let botaoSair = document.createElement('button')
        botaoSair.innerText = "sair da conta " 
        botaoSair.onclick = sair;

        var1.appendChild(botaoSair)
    }
}

function sair(){
    alert("Até mais")
    var1.innerHTML = 'Você saiu '
}
