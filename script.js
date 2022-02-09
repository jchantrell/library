document.body.addEventListener('click', function(event){
  if(event.target.classList.contains('add')) {
    addBookForm(event);
  };
  if(event.target.classList.contains('remove')) {
    removeBook(event);
  }; 
});


let Library = [];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookForm(event) {
  const selected = event.target.parentNode;
  const library = document.querySelector('.library');
  const bookID = document.createElement('div');
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
  const readCheckbox = document.createElement('input');
  const newBook = document.createElement('div');
  const newBookButton = document.createElement('div');

  // clear tile
  selected.classList.remove('new')
  selected.textContent = ''

  // populate tile with form info 
  selected.appendChild(submitButton)
  submitButton.classList.add('button', 'submit')
  submitButton.textContent = '✔'
  selected.appendChild(titleInput)
  titleInput.classList.add('title')
  titleInput.placeholder = 'Title'
  selected.appendChild(authorInput)
  authorInput.classList.add('author')
  authorInput.placeholder = 'Author'
  selected.appendChild(pagesInput)
  pagesInput.classList.add('pages')
  pagesInput.placeholder = 'Pages'
  selected.appendChild(read)
  read.classList.add('read')
  read.appendChild(readText)
  readText.classList.add('readText')
  readText.textContent = 'Read yet?'
  read.appendChild(readCheckbox)
  readCheckbox.type = 'checkbox'

  function submitBook(){
    document.querySelectorAll('.submit').forEach(button => {
      button.addEventListener('click', function(){
        let id = Library.length + 1;
        let bookTitle = titleInput.value;
        let bookAuthor = authorInput.value;
        let bookPages = pagesInput.value;
        if (readCheckbox.checked == true){
          bookRead = true;
        }
        if (readCheckbox.checked != true){
          bookRead = false;
        }

        let newEntry = new Book(id, bookTitle, bookAuthor, bookPages, bookRead);
        Library.push(newEntry);
        console.log(`Added ${bookTitle} to the library.`)

        submitButton.remove()
        selected.appendChild(bookID)
        bookID.dataset.id = id;
        selected.appendChild(removeButton)
        removeButton.classList.add('button', 'remove')
        removeButton.textContent = '✕'
        titleInput.remove()
        selected.appendChild(title)
        title.classList.add('title')
        title.textContent = bookTitle
        authorInput.remove()
        selected.appendChild(author)
        author.classList.add('author')
        author.textContent = bookAuthor
        pagesInput.remove()
        selected.appendChild(pages)
        pages.classList.add('pages')
        pages.textContent = bookPages
        read.remove()
        selected.appendChild(read)

        newBook.classList.add('new', 'book');
        newBookButton.classList.add('add');
        library.appendChild(newBook);
        newBook.appendChild(newBookButton);
        newBookButton.textContent = '+'; 

      })
    })
  };

  submitBook();
}

function removeBook(event){
  const selected = event.target.parentNode;
  const title = selected.querySelector('.title').textContent;
  const id = selected.querySelector('[data-id]').getAttribute('data-id')
  console.log(id)
  index = Library.indexOf()
  selected.remove();
  console.log(`Removed ${title} from the library.`);
};

function updateBookID(){
  // on removal of a book from array, update the associated data attribute of every book object to reflect its position in the array

};
