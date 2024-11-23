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

dialogElement.addEventListener("close",() =>{
    console.log(myLibrary);
        let divElement = document.createElement("div");
        divElement.dataset.bookName = bookNameEl.value;
        divElement.dataset.authorName = authorNameEl.value;
        divElement.dataset.pages = pagesEl.value;
        //creating data attributes to elements
        const bookName = divElement.dataset.bookName;
        const authorName = divElement.dataset.authorName;
        const pages = divElement.dataset.pages;

        addBookToLibrary(bookName,authorName, pages);
        console.log(divElement.dataset.bookName);
        console.log(divElement.dataset.authorName);
        console.log(divElement.dataset.pages);
        console.log(myLibrary);
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Button";
        removeBtn.classList = "removeBtn";
        divElement.classList = "card-body";
        divElement.textContent = `Title: ${bookNameEl.value}
        Author: ${authorNameEl.value},
        Pages: ${pagesEl.value} `;
        document.body.appendChild(divElement);
        divElement.appendChild(removeBtn);
    
});



myLibrary.forEach(function(item){
    let divElement = document.createElement("div");
    let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Button";
        removeBtn.classList = "removeBtn";
    divElement.classList = "card-body";
        
    divElement.textContent = `Title: ${item.title}
    Author: ${item.author},
    Pages: ${item.pages} `;
    
    document.body.appendChild(divElement);
    divElement.appendChild(removeBtn);


    });

    function handleRemoveButtonClick(event){
        const divElement = event.target.parentElement;
        delete divElement.dataset.bookName;
        delete divElement.dataset.authorName;
        delete divElement.dataset.pages;

        const index = myLibrary.findIndex(obj =>{
            obj.title === divElement.dataset.bookName; //to remove item from array, we find the index of the obj then use splice method.
        });

        myLibrary.splice(index,1);
      
        divElement.remove(); // this will remove the entire element
    }

    document.body.addEventListener("click", (event) => {
            if (event.target && event.target.classList.contains("removeBtn")) {
                handleRemoveButtonClick(event);
            }
            console.log(myLibrary);
    });


    