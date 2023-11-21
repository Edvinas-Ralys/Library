const bookLibrary = [];

let book;

const bookTitle = document.getElementById(`book-title`);
const bookAuthor = document.getElementById(`book-author`);
const bookPages = document.getElementById(`book-pages`);
const bookDate = document.getElementById(`book-date`);
const haveRead = document.getElementById(`have-read`)

const bookVariable = [bookTitle, bookAuthor, bookPages, bookDate, haveRead]


//Clears form after closing or adding
function clearForm(array){
    haveRead.checked = false
    array.map(variable => variable.value = ``)
}

const titleOfBookList = document.querySelector(`.title-list`)
const authorOfBookList = document.querySelector(`.author-list`)
const pagesOfBookList = document.querySelector(`.pages-list`)
const releaseOfBookList = document.querySelector(`.release-list`)
const readOfBookList = document.querySelector(`.read-list`)

function displayBooks(array){
    const titleOfBookDisplay = document.createElement(`div`);
    titleOfBookDisplay.classList.add(`title-of-book-display`);
    titleOfBookList.appendChild(titleOfBookDisplay);

    const authorOfBookDisplay = document.createElement(`div`);
    authorOfBookDisplay.classList.add(`author-of-book-display`);
    authorOfBookList.appendChild(authorOfBookDisplay)

    const pagesOfBookDisplay = document.createElement(`div`);
    pagesOfBookDisplay.classList.add(`pages-of-book-display`);
    pagesOfBookList.appendChild(pagesOfBookDisplay)

    const releaseOfBookDisplay = document.createElement(`div`)
    releaseOfBookDisplay.classList.add(`release-of-book-display`)
    releaseOfBookList.appendChild(releaseOfBookDisplay)

    const readOfBookDisplay = document.createElement(`div`);
    readOfBookDisplay.classList.add(`read-of-book-display`)
    readOfBookList.appendChild(readOfBookDisplay)

    array.map(book =>
        titleOfBookDisplay.innerHTML = book.title,
        authorOfBookDisplay.textContent = book.author,
        pagesOfBookDisplay.textContent = book.pages,
        releaseOfBookDisplay.textContent = book.date,
        book.read == true ? readOfBookDisplay.style.cssText = "background-color: green;" : readOfBookDisplay.style.cssText = "background-color: red;"
        )
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



const addBookButton = document.querySelector(`.add-book-button`);
addBookButton.addEventListener(`click`, () => {
    console.log(`submit works`)
    if(!bookTitle.value == ``){
        book = new Book(
            bookTitle.value,
            bookAuthor.value,
            bookPages.value,
            bookDate.value,
            haveRead.checked
        )
        bookLibrary.push(book)
        displayBooks(bookLibrary)
    }
    if(!bookTitle.value == ``){
        bookForm.style.display = `none`
        clearForm(bookVariable)
    }
    console.log(bookLibrary)
});

const closeForm = document.querySelector(`.icon-close`);
closeForm.addEventListener(`click`, ()=>{
    bookForm.style.display = `none`;
    clearForm(bookVariable)
})






