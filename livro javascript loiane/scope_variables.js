let myVariable ='global'
myOtherVariable = 'global'

function myFunction() {
    let myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);