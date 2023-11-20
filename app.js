const bookLibrary = [];

let book;

const bookTitle = document.getElementById(`book-title`);
const bookAuthor = document.getElementById(`book-author`);
const bookPages = document.getElementById(`book-pages`);
const bookDate = document.getElementById(`book-date`);
const haveRead = document.getElementById(`have-read`)

const bookVariable = [bookTitle, bookAuthor, bookPages, bookDate, haveRead]

function clearForm(array){
    haveRead.checked = false
    array.map(variable => variable.value = ``)
}


function Book(title, author, pages, date, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.date = date,
    this.read = read;
};

const addBookButton = document.querySelector(`.add-book-button`);
addBookButton.addEventListener(`click`, () => {
    book = new Book(
        bookTitle.value,
        bookAuthor.value,
        bookPages.value,
        bookDate.value,
        haveRead.checked
    )
    clearForm(bookVariable)
    bookLibrary.push(book)
    console.log(bookLibrary)
});


const enterForm = document.querySelector(`.add-book`);
enterForm.addEventListener(`click`, () => {
    bookForm.style.display = `flex`;
    console.log(`works open form`)
})





