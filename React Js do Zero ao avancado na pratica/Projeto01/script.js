function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Qual é o seu nome?');
    
    if(texto != ''){
        area.innerHTML = "Bem vindo " + texto;
    }else{
        if(texto == '' || texto == null ){
            alert("Favor digitar novamente seu nome");
            area.innerHTML = "Bem vindo...";
        }
    }
 }