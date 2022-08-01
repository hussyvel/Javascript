function entrar(){

    let area = document.getElementById('area');

    let texto = prompt("Digite seu nome: ");

    if(texto == '' || texto == null){
        alert("Digite seu nome novamente!");
        area.innerHTML = 'Bem vindo...';
    }else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
}

