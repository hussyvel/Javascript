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

let getSummary = function(livros){
    console.log(`${livros.title} by ${livros.author} of the pageCount ${livros.pageCount}`)
}

resultado = getSummary(myBooks)
resultado = getSummary(otherBook)