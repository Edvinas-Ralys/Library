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

function checkForEmptyBooks(){

}


function checkRequiredField(){

}

function Book(title, author, pages, date, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.date = date,
    this.read = read;
};

const bookForm = document.querySelector(`.book-form`)

const openForm = document.querySelector(`.add-book`);
openForm.addEventListener(`click`, () => {
    bookForm.style.display = `flex`;
    console.log(`works open form`)
})


const resetForm = document.querySelector(`.rest-book-form`);


const addBookButton = document.querySelector(`.add-book-button`);
addBookButton.addEventListener(`click`, () => {
    console.log(`submit works`)
    book = new Book(
        bookTitle.value,
        bookAuthor.value,
        bookPages.value,
        bookDate.value,
        haveRead.checked
    )
    bookLibrary.push(book)
    // bookForm.style.display = `none`
    // clearForm(bookVariable)
    console.log(bookLibrary)
});








