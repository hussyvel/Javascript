let scope = "global";
    function checkscope(){
        let scope = "local";
        return scope
    }

let x = checkscope()
console.log(x)