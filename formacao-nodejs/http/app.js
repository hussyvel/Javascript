let http = require("http")

http.createServer(function(require, response){
    response.end("<h1>Bem vindo ao meu site</h1><h4>hussyvel Ribeiro da silva</h4>");
}).listen(8184)

console.log("Meu servidor está rodando!!!")
