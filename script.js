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

myLibrary.forEach(function(item){
let divElement = document.createElement("div");
divElement.classList = "card-body";
divElement.textContent = `Title: ${item.title}
Author: ${item.author},
Pages: ${item.pages} `;

document.body.appendChild(divElement);
});