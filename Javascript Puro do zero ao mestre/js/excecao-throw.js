function getRectArea(width, height){
    if (isNaN(width) || isNaN(height)){
        throw console.log( "Erro, não é um número")
    }
}

try{
    getRectArea(8, "h")
}catch(e){
    console.log(e)
}finally{
    console.log("passou mas não é um número")
}