function sum(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw Error("apenas valores numéricos")
    }
    return x + y
}
