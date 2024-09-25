const api = "http://localhost:5500";

function obterParametrosDaURL(){
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
        vars[key] = value;
    });
    return vars;
}
console.log("logado")

