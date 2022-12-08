let n = "global"

function mostrarN(){

   let n1 = `n1 local`

    if(true){
        var n2 = `n2 dentro de if com let`
    }

    console.log(n2)
    console.log(`valor de n1: ` + n1)

}

mostrarN()

console.log(`valor de n ` + n)

function externa(){
    let n = " n local na função externa"

    function interna(){
        let n = "n local na função interna"
        console.log(n)
    }
    
    interna()
    console.log(n)
}

externa()