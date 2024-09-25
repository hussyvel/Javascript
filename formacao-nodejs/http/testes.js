let http = require("http")

http.createServer(function(req, res){
    res.end("<h1>João Ethan, Hussyvel, Silva</h1>")
}).listen(8182)

console.log("Servidor rodando!!!")