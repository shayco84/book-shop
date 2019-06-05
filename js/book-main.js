'use strict'

$(document).ready(init);

function init() {
    createBooks()
    renderBooks()
    $('.btn-danger').click(onDeleteBook)
    
}

function renderBooks() {
  var books = getBooks()
    var strHtmls = books.map(function(book){
      return  `<tr>
                      <th scope="row">${book.id}</th>
                      <td>${book.bookName}</td>
                      <td>${book.price} $</td>
                      <td>
                      <button type="button" class="btn btn-primary">Read</button>
                      <button type="button" class="btn btn-warning">Update</button>
                      <button type="button" class="btn btn-danger">Delete</button>
                      </td>
                    </tr>`
                    

  })
  $('tbody').html(strHtmls.join(''))
}

function onReadBook() {
    readBook()
}

function onCloseModal() {

}

function onDeleteBook() {
    deleteBook()
    renderBooks()
}

function onAddBook() {
    addBook()
}

function onUpdateBook() {
    updateBook()
}

function readBook() {

}


