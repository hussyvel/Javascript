let var2 = document.getElementById('teste')

function clicar(){
    let nome = prompt("Digite seu nome: ")

    if(nome === ''|| nome === null){
        alert("opa, algo deu errado")
        var2.innerHTML = "Seja bem vindo " + nome + " ";
    }else{
        var2.innerHTML = "Seja bem vindo " + nome + " ";
        
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da Conta";
        botaoSair.onclick = sair;

        var2.appendChild(botaoSair);
    }
}

function sair(){
    alert("Até mais");
    var2.innerHTML = "Você Saiu Parabéns";
}
