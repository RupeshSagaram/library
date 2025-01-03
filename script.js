const containerDiv = document.getElementById("containerDiv");
const dialogElement = document.getElementById("dialogElement");
const newBook = document.getElementById("newBook");
const confirmBtn = document.getElementById("confirmBtn");
const inputEl = document.getElementsByClassName("input");
const cancelBtn = document.getElementById("cancelBtn");
const bookNameEl = document.forms["my-form"].bookName;
const authorNameEl = document.forms["my-form"].authorName;
const pagesEl = document.forms["my-form"].pages;
const output = document.getElementById("output");
const read = document.querySelector('input[name="read"]:checked');

const myLibrary = [];

//setting properties on prototype of Book object
//   Book.prototype.read = "";



class Book {
    constructor(title, author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
//  this Book class that will be used
// in the addBookToLibrary function.

function addBookToLibrary(title,author,pages,read){
    myLibrary.push(new Book(title,author,pages,read));
}

addBookToLibrary('A Game Of Thrones','George R.R. Martin',1000,"finished");
addBookToLibrary('for one more day','Mitch Albom',500,"pending");
addBookToLibrary('Percy jackson','Rick Riorden',1200,"pending");

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
    
        let divElement = document.createElement("div");
        const read = document.querySelector('input[name="read"]:checked');
        divElement.dataset.bookName = bookNameEl.value;
        divElement.dataset.authorName = authorNameEl.value;
        divElement.dataset.pages = pagesEl.value;
        divElement.dataset.read = read.value;
        console.log(divElement.dataset.read);

        //setting properties on prototype of Book object
        
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
        readPara.classList.add("readStatus");
        
        readPara.textContent = `Read: ${readEl}`;


        let readStatusBtn = document.createElement("button");
        readStatusBtn.textContent = "Read Status";
        readStatusBtn.classList = "readStatusBtn"; 

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Button";
        removeBtn.classList = "removeBtn";
        divElement.classList = "card-body";

        
        document.body.appendChild(divElement);
        containerDiv.appendChild(divElement);
        divElement.appendChild(titlePara);
        divElement.appendChild(authorPara);
        divElement.appendChild(pagesPara);
        divElement.appendChild(readPara);
        divElement.appendChild(readStatusBtn);
        divElement.appendChild(removeBtn);
        Book.prototype.read = readEl;

        console.log(readEl);
        
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
    readPara.classList.add("readStatus");
    readPara.textContent = `Read: ${item.read}`;

    divElement.dataset.read = item.read;

    let readStatusBtn = document.createElement("button");
    readStatusBtn.textContent = "Read Status";
    readStatusBtn.classList = "readStatusBtn";

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Button";
    removeBtn.classList = "removeBtn";
    divElement.classList = "card-body";

    // if(divElement.dataset.read==="finished"){
    //     Book.prototype.read = "finished";
    // }
    // else if (divElement.dataset.read ==="pending") {
    //     Book.prototype.read = "pending";
    // } 
    
    document.body.appendChild(divElement);
    containerDiv.appendChild(divElement);
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
        const buttonElement = event.target;
        const readPara = divElement.querySelector(".readStatus");

        //readPara.textContent.includes("finished")
        divElement.dataset.read ==="finished"
        
        if(divElement.dataset.read ==="finished"){
            readPara.textContent = "Read: pending"; 
            Book.prototype.read === "pending"
            divElement.dataset.read = "pending";
            console.log(`Updated read status: ${divElement.dataset.read}`);
           
        }

        else if (divElement.dataset.read ==="pending"){
            readPara.textContent = "Read: finished"; 
            Book.prototype.read === "finished"
            divElement.dataset.read = "finished";  
            console.log(`Updated read status: ${divElement.dataset.read}`);
        }
    }

    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("readStatusBtn")) {
            handleReadStatus(event);
        }
    
    });

   

    