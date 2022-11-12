/**let x = 0

while(x < 10){
    document.write('<br> O valor de x é ' + x)
    x++;
}
*/
/*let x = 10

for(i = 0; i < x; i++){
    document.write('<br> ' + (i + x))

}*/

function pedir(){

    let pedido = prompt("Qual o seu pedido?")

    switch(Number(pedido)){
        case 1:
            alert("Você pediu água");
            break;
        case 2:
            alert("Você pediu suco");
            break;
        case 3:
            alert("Você pediu hambúrguer")
            break;
        case 4:
            alert("Você pediu refrigerante")
            break;
        default:
            alert("Você precisa escolher algum dos ítems do menu")
            break;
    }
}