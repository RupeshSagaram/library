const dialogElement = document.getElementById("dialogElement");
const newBook = document.getElementById("newBook");
const confirmBtn = document.getElementById("confirmBtn");
const inputEl = document.getElementsByClassName("input");
const cancelBtn = document.getElementById("cancelBtn");
const bookNameEl = document.forms["my-form"].bookName;
const authorNameEl = document.forms["my-form"].authorName;
const pagesEl = document.forms["my-form"].pages;
const output = document.getElementById("output");

const myLibrary = [];

/* this is a constructor that will be used
in the addBookToLibrary function.
*/
function Book(title, author,pages){
this.title = title;
this.author = author;
this.pages = pages;
}

function addBookToLibrary(title,author,pages){
    myLibrary.push(new Book(title,author,pages));
}

addBookToLibrary('bP','J.k.r',200);
addBookToLibrary('jP','J.k.r',2300);
addBookToLibrary('gP','t.k.r',3300);
addBookToLibrary('Percy jackson','Rick Riorden',1200);
console.log(myLibrary);

newBook.addEventListener("click", () =>{
    dialogElement.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialogElement.close();
});

confirmBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    dialogElement.close();
});

dialogElement.addEventListener("close",()=>{
    addBookToLibrary(bookNameEl.value,authorNameEl.value,pagesEl.value);
        let divElement = document.createElement("div");
        divElement.classList = "card-body";
        divElement.textContent = `Title: ${bookNameEl.value}
        Author: ${authorNameEl.value},
        Pages: ${pagesEl.value} `;
        
        document.body.appendChild(divElement);
    
});

myLibrary.forEach(function(item){
    let divElement = document.createElement("div");
    divElement.classList = "card-body";
    divElement.textContent = `Title: ${item.title}
    Author: ${item.author},
    Pages: ${item.pages} `;
    
    document.body.appendChild(divElement);
    });



    