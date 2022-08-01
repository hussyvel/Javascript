var o = { x:1}, p = {x:1}
console.log(o === p) /*os objetos não são iguais*/

var a = [], b = []
console.log(a === b);/*os arrays não são iguais*/

var a = [];
var b = a;
b[0]=1;
a[0]
console.log(a === b)

var a = ['a', 'b', 'c'];
var b = [];
for (var i = 0; i < a.length; i++){
    b[i] = a[i]
}

console.log(b)