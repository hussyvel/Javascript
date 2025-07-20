let scope = "global"

function checkscope2(){
    scope = "local";
    myscope = "local";
    return [scope, myscope];
}

let x = checkscope2()
scope
myscope

console.log(x, scope, myscope)