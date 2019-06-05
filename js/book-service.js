'use strict'

var gBooks;
const PAGE_SIZE = 5;
var currPageIdx = 0;

function createBooks() {
    var books = [];
    var names = ['Gunshot Road', 'The Never Game', '1984', 'Lethal White', 'The President is Missing']
    for (var i = 0; i < 10; i++) {
        var book = names.splice(0, 1)
        books.push(createBook(book))
    }
    gBooks = books;
}


function createBook(name) {
    return {
        id: makeId(),
        bookName: name,
        price: getRandomIntInclusive(5, 30),
        imgUrl: "https://onlocationvacations.com/wp-content/uploads/2019/01/book.jpg"
    }
}

function getBooks() {
    var fromIdx = currPageIdx * PAGE_SIZE
    var books = gBooks.slice(fromIdx, fromIdx + PAGE_SIZE)
    return books
}

function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
}

function addBook() {

}

function getBookById() {

}

function updateBook() {

}



