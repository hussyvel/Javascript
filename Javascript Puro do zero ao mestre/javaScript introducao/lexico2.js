let x = 10
x = "string qualquer"

let msg = "uma \'string"

console.log(msg)

console.log("2" * 2)


function teste(){
    console.log(this)
}

teste()

function teste2(){
    console.log(this)
}

const obj = {
    n: 1,
    teste2
}

obj.teste2()
