document.body.addEventListener('click', function(event){
  if(event.target.classList.contains('add')) {
    addBook(event);
  };
  if(event.target.classList.contains('remove')) {
    removeBook(event);
  };
});

let Library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(event) {
  //setup
  selected = event.target.parentNode;
  const library = document.querySelector('.library');
  const title = document.createElement('div');
  const titleInput = document.createElement('input')
  const author = document.createElement('div');
  const authorInput = document.createElement('input')
  const pages = document.createElement('div');
  const pagesInput = document.createElement('input')
  const read = document.createElement('div');
  const readInput = document.createElement('input')
  const submit = document.createElement('button');
  const buttonInput = document.createElement('button')
  const bookForm = document.createElement('form');
  const newBook = document.createElement('div');
  const newBookButton = document.createElement('div');

  selected.classList.remove('new')
  selected.textContent = ''
  selected.appendChild(titleInput);
  selected.appendChild(authorInput);
  selected.appendChild(pagesInput);
  selected.appendChild(readInput);
  selected.appendChild(submit);

  // prompt 
  titleInput.classList.add('title');
  titleInput.placeholder = 'Title';
  authorInput.classList.add('author');
  authorInput.placeholder = 'Author';
  pagesInput.classList.add('pages');
  pagesInput.placeholder = 'Pages';
  readInput.classList.add('read');
  readInput.placeholder = 'Read';
  submit.classList.add('button', 'submit')
  submit.textContent = 'Submit';


  //if all fields are valid, create book

  // when submit click
  // titleInput = title;
  // etc
  let newEntry = new Book(title, author, pages, read);
  Library.push(newEntry);
  console.log(`Added ${newEntry.title} to the library.`);

  //append current new book tile with new book info
  selected = event.target.parentNode;
  
  //create new book tile
`  newBook.classList.add('new', 'book');
  newBookButton.classList.add('add');
  library.appendChild(newBook);
  newBook.appendChild(newBookButton);
  newBookButton.textContent = '+';`
}

function removeBook(event){
  selected = event.target.parentNode;
  selected.remove();
  console.log(`Removed x from the library.`);
}

