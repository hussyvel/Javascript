let myBooks = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book){
    return {
        sumario:`${book.title} is ${book.author}`,
        pageCountSumario: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSumario = getSummary(myBooks)
let otherbookSumario = getSummary(otherBook)

console.log(otherbookSumario.sumario)

//challenge area

let converterFahrenheit = function(fahrenheit){
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }   
}

let temps = converterFahrenheit(74)

console.log(temps)