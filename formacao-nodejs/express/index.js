const express = require ('express') //importando o express
const app = express(); //iniciando o express no app

app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao meu site</h1>")
});

app.listen(4001,function(erro){
    if(erro){
        console.log("Houve um erro")
    }else{
        console.log("Servidor iniciado com sucesso")
    }
})