let name = ' Hussyvel Silva  '

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

let password = 'abcpasswordsenha'
console.log(password.includes('password'))

console.log(name.trim())


let isValidPassword = function (password) {
    /*if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
    */
   return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('asdf12312342154'))
console.log(isValidPassword('asdfasdçlfkjpassword'))