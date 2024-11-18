const myLibrary = [];


/* this is a constructor that will be used 
      in the addBookToLibrary  function. 
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
console.log(myLibrary.jP);

