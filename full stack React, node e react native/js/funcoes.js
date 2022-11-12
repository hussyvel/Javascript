let var1 = document.getElementById('demo');

function entrar() {
    let nome = prompt("Qual o seu nome? ");

    if(nome === ' ' || nome === null){
        alert("opa, algo deu errado")
        var1.innerHTML = "Seja bem vindo " + nome
    }else{
        var1.innerHTML = "Seja bem vindo " + nome
    }

    let botaoSair = document.createElement('button')
    botaoSair.innerText = "Sair da Conta"
    botaoSair.onclick = sair;

}

function sair(){
    alert("Opa, tchau")
    var1.innerHTML = "Clique novamente"
}
