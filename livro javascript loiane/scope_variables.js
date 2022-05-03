let myVariable = 'global';
myOtherVariable = 'global';

function myFunction(){
    let myVariable = 'local';
    return myVariable;
}

function myOtherVariable(){
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());

