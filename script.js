const dialogElement = document.getElementById("dialogElement");
const newBook = document.getElementById("newBook");
const confirmBtn = document.getElementById("confirmBtn");
const inputEl = document.getElementsByClassName("input");
const cancelBtn = document.getElementById("cancelBtn");
const bookNameEl = document.forms["my-form"].bookName;
const authorNameEl = document.forms["my-form"].authorName;
const pagesEl = document.forms["my-form"].pages;
const output = document.getElementById("output");
const read = document.getElementById("read");



const myLibrary = [];

//setting properties on prototype of Book object
Book.prototype.read = "finished";

/* this is a constructor that will be used
in the addBookToLibrary function.
*/
function Book(title, author,pages){
this.title = title;
this.author = author;
this.pages = pages;
}

function addBookToLibrary(title,author,pages,read){
    myLibrary.push(new Book(title,author,pages,read));
}

addBookToLibrary('bP','J.k.r',200,"finished");
addBookToLibrary('Percy jackson','Rick Riorden',1200,"not finished");
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
        divElement.dataset.read = read.value;
        //creating data attributes to elements
        const bookName = divElement.dataset.bookName;
        const authorName = divElement.dataset.authorName;
        const pages = divElement.dataset.pages;
        const readEl = divElement.dataset.read;

        addBookToLibrary(bookName,authorName, pages,readEl);

        const titlePara = document.createElement("p");
         titlePara.textContent = `Title: ${bookNameEl.value}`;

        const authorPara = document.createElement("p");
        authorPara.textContent = `Author: ${authorNameEl.value}`;

        const pagesPara = document.createElement("p");
        pagesPara.textContent = `Pages: ${pagesEl.value}`;

        const readPara = document.createElement("p");
        readPara.textContent = `Read: ${read.value}`;

        let readStatusBtn = document.createElement("button");
        readStatusBtn.textContent = "Read Status";
        readStatusBtn.classList = "readStatusBtn";

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Button";
        removeBtn.classList = "removeBtn";
        divElement.classList = "card-body";

        document.body.appendChild(divElement);
        divElement.appendChild(titlePara);
        divElement.appendChild(authorPara);
        divElement.appendChild(pagesPara);
        divElement.appendChild(readPara);
        divElement.appendChild(readStatusBtn);
        divElement.appendChild(removeBtn);
    
});


myLibrary.forEach(function(item){
    let divElement = document.createElement("div");
 
    const titlePara = document.createElement("p");
    titlePara.textContent = `Title: ${item.title}`;

    const authorPara = document.createElement("p");
    authorPara.textContent = `Author: ${item.author}`;

    const pagesPara = document.createElement("p");
    pagesPara.textContent = `Pages: ${item.pages}`;

    const readPara = document.createElement("p");
    readPara.textContent = `Read: ${item.read}`;

    let readStatusBtn = document.createElement("button");
    readStatusBtn.textContent = "Read Status";
    readStatusBtn.classList = "readStatusBtn";

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Button";
    removeBtn.classList = "removeBtn";
    divElement.classList = "card-body";
    
    document.body.appendChild(divElement);
    divElement.appendChild(titlePara);
    divElement.appendChild(authorPara);
    divElement.appendChild(pagesPara);
    divElement.appendChild(readPara);
    divElement.appendChild(readStatusBtn);
    divElement.appendChild(removeBtn);
    
    });

    function handleRemoveButtonClick(event){
        const divElement = event.target.parentElement;
        delete divElement.dataset.bookName;
        delete divElement.dataset.authorName;
        delete divElement.dataset.pages;
        delete divElement.dataset.read;

        const index = myLibrary.findIndex(obj =>{
            obj.title === divElement.dataset.bookName; //to remove item from array, 
                                                       //we find the index of the obj then use splice method.
        });

        myLibrary.splice(index,1);
      
        divElement.remove(); // this will remove the entire element
    }

    document.body.addEventListener("click", (event) => {
            if (event.target && event.target.classList.contains("removeBtn")) {
                handleRemoveButtonClick(event);
            }
            
    });

    function handleReadStatus(event){
        const divElement = event.target.parentElement;

        if(Book.prototype.read ==="finished"){
            Book.prototype.read = "not finished";
            divElement.dataset.read = Book.prototype.read;
            read.value = divElement.dataset.read;
            console.log(read.value);

           console.log(divElement.dataset.read);
            console.log(Book.prototype.read);
           
        }

        else if (Book.prototype.read ==="not finished"){
            Book.prototype.read = "not finished";
            divElement.dataset.read = Book.prototype.read;
          
        }
    }

    document.body.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("readStatusBtn")) {
            handleReadStatus(event);
        }
    
    });

   

    