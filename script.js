document.body.addEventListener('click', function(event){
  if(event.target.classList.contains('add')) {
    addBookForm(event);
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

function addBookForm(event) {
  //setup
  const selected = event.target.parentNode;
  const library = document.querySelector('.library');
  const submitButton = document.createElement('div');
  const removeButton = document.createElement('div');
  const title = document.createElement('div');
  const titleInput = document.createElement('input');
  const author = document.createElement('div');
  const authorInput = document.createElement('input');
  const pages = document.createElement('div');
  const pagesInput = document.createElement('input');
  const read = document.createElement('div');
  const readText = document.createElement('div');
  const readSwitch = document.createElement('label');
  const readCheckbox = document.createElement('input');
  const readSlider = document.createElement('span');
  const newBook = document.createElement('div');
  const newBookButton = document.createElement('div');

  // clear tile
  selected.classList.remove('new')
  selected.textContent = ''

  // populate tile with form info 
  selected.appendChild(submitButton);
  submitButton.classList.add('button', 'submit');
  submitButton.textContent = '✔';
  selected.appendChild(titleInput);
  titleInput.classList.add('title');
  titleInput.placeholder = 'Title';
  selected.appendChild(authorInput);
  authorInput.classList.add('author');
  authorInput.placeholder = 'Author';
  selected.appendChild(pagesInput);
  pagesInput.classList.add('pages');
  pagesInput.placeholder = 'Pages';
  selected.appendChild(read);
  read.classList.add('read');
  read.appendChild(readText);
  readText.classList.add('readText');
  readText.textContent = 'Read yet?';
  read.appendChild(readSwitch);
  readSwitch.classList.add('switch');
  readSwitch.appendChild(readCheckbox);
  readCheckbox.type = 'checkbox';
  readSwitch.appendChild(readSlider);
  readSlider.classList.add('slider');

  bookTitle = titleInput.value;
  console.log(bookTitle)
  
  let newEntry = new Book(title, author, pages, read);
  Library.push(newEntry);
  console.log(`Added ${newEntry.title} to the library.`);
  
  //create new book tile
  newBook.classList.add('new', 'book');
  newBookButton.classList.add('add');
  library.appendChild(newBook);
  newBook.appendChild(newBookButton);
  newBookButton.textContent = '+';
  
}
function removeBook(event){
  selected = event.target.parentNode;
  selected.remove();
  console.log(`Removed x from the library.`);
}

