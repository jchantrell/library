document.addEventListener('DOMContentLoaded', function() {
  reloadBooks()
  createNewBookTile()
}, false);

function reloadBooks(){
  books = JSON.parse(localStorage.getItem("Library"))
  if (books == null){
    createNewBookTile
  }
  if (books != null){
    books.forEach(function(book){
      recreateBook(book)
    })
  }

}

document.body.addEventListener('click', function(event){
  if(event.target.classList.contains('add')) {
    createBook(event);
  };
  if(event.target.classList.contains('remove')) {
    removeBook(event);
  };
  if(event.target.classList.contains('slider')) {
    toggleReadStatus(event);
  };
});

Library = []

function Book(id, title, author, description, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.description = description;
  this.read = read;
}

function recreateBook(book){
  console.log(`${book.id}, ${book.title}, ${book.author}, ${book.description}, ${book.read}`)

  const library = document.querySelector('.library');
  const bookID = document.createElement('div');
  const removeButton = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const description = document.createElement('div');
  const read = document.createElement('div');
  const switchLabel = document.createElement('label');
  const switchInput = document.createElement('input');
  const switchContainer = document.createElement('span')
  const newBook = document.createElement('div');

  library.appendChild(newBook)
  newBook.classList.add('book');
  newBook.appendChild(bookID)
  bookID.dataset.id = book.id
  newBook.appendChild(removeButton)
  removeButton.classList.add('button', 'remove')
  newBook.appendChild(title)
  title.classList.add('title')
  title.textContent = book.title
  newBook.appendChild(author)
  author.classList.add('author')
  author.textContent = book.author
  newBook.appendChild(description)
  description.classList.add('description')
  description.textContent = book.description
  newBook.appendChild(read)
  read.appendChild(switchLabel)
  switchLabel.classList.add('switch')
  switchLabel.appendChild(switchInput)
  switchInput.type = 'checkbox'
  switchLabel.appendChild(switchContainer)
  switchContainer.classList.add('slider')

  if(book.read == true){
    switchInput.checked = true;
    newBook.classList.add('hasBeenRead')
  }
  else {
    newBook.classList.add('hasNotBeenRead')
  }

  Library.push(book)
}


function createBook(event) {
  const selected = event.target.parentNode;
  const bookID = document.createElement('div');
  const submitButton = document.createElement('div');
  const removeButton = document.createElement('div');
  const title = document.createElement('div');
  const titleInput = document.createElement('input');
  const author = document.createElement('div');
  const authorInput = document.createElement('input');
  const description = document.createElement('div');
  const descriptionInput = document.createElement('input');
  const read = document.createElement('div');
  const readText = document.createElement('div');
  const switchLabel = document.createElement('label');
  const switchInput = document.createElement('input');
  const switchContainer = document.createElement('span')


  // clear tile
  selected.classList.remove('new')
  selected.textContent = ''

  // populate tile with form info 
  selected.appendChild(submitButton)
  submitButton.classList.add('button', 'submit')
  selected.appendChild(titleInput)
  titleInput.classList.add('title')
  titleInput.placeholder = 'Title'
  selected.appendChild(authorInput)
  authorInput.classList.add('author')
  authorInput.placeholder = 'Author'
  selected.appendChild(descriptionInput)
  descriptionInput.classList.add('description')
  descriptionInput.placeholder = 'Description'
  selected.appendChild(read)
  read.classList.add('read')
  read.appendChild(readText)
  readText.classList.add('readText')
  readText.textContent = 'Read yet?'
  
  read.appendChild(switchLabel)
  switchLabel.classList.add('switch')
  switchLabel.appendChild(switchInput)
  switchInput.type = 'checkbox'
  switchLabel.appendChild(switchContainer)
  switchContainer.classList.add('slider')


  function submitBook(){
    document.querySelectorAll('.submit').forEach(button => {
      button.addEventListener('click', function(){
        if (Library.length === 0){
          id = 0;
        }
        else {
          id = Library.length;
       }
        let bookTitle = titleInput.value;
        let bookAuthor = authorInput.value;
        let bookDescription = descriptionInput.value;
        if (switchInput.checked == true){
          bookRead = true;
          selected.classList.add('hasBeenRead')
        }
        if (switchInput.checked != true){
          bookRead = false;
          selected.classList.add('hasNotBeenRead')
        }

        let newEntry = new Book(id, bookTitle, bookAuthor, bookDescription, bookRead);
        pushToLibrary(newEntry)
        localStorage.setItem("Library", JSON.stringify(Library));

        submitButton.remove()
        selected.appendChild(removeButton)
        removeButton.classList.add('button', 'remove')
        if (switchInput.checked == true){
          removeButton.classList.add('hasBeenRead')
        }
        if (switchInput.checked == false){
          removeButton.classList.add('hasNotBeenRead')
        }
        selected.appendChild(bookID)
        bookID.dataset.id = id;
        titleInput.remove()
        selected.appendChild(title)
        title.classList.add('title')
        title.textContent = bookTitle
        authorInput.remove()
        selected.appendChild(author)
        author.classList.add('author')
        author.textContent = bookAuthor
        descriptionInput.remove()
        selected.appendChild(description)
        description.classList.add('description')
        description.textContent = bookDescription
        read.remove()
        selected.appendChild(read)
        readText.textContent = ''

        createNewBookTile();

      })
    })
  };

  submitBook();
}

function createNewBookTile(){
  const newBook = document.createElement('div');
  const newBookButton = document.createElement('div');
  const library = document.querySelector('.library');

  newBook.classList.add('new', 'book');
  newBookButton.classList.add('add');
  library.appendChild(newBook);
  newBook.appendChild(newBookButton);
  newBookButton.textContent = '+'; 
}

function pushToLibrary(book){
  Library.push(book)
  updateLibrary()
}

function updateBookId(){
  
}

function updateLibrary(){
  Library.forEach(function(book){
    index = Library.indexOf(book)
    book.id = index;
  })

}

function removeBook(event){
  const selected = event.target.parentNode;
  const id = selected.querySelector('[data-id]').getAttribute('data-id')
  book = Library.find(book => book.id == id)
  Library.splice(book, 1)
  updateLibrary()
  updateStorage()
  selected.remove();
};

function toggleReadStatus(event){
  const label = event.target.parentNode;
  const container = label.parentNode;
  const book = container.parentNode;
  const button = book.querySelectorAll('.button')
  const checkbox = label.querySelector('input')

  if (checkbox.checked == true){
    book.classList.add('hasNotBeenRead')
    book.classList.remove('hasBeenRead')
    button.forEach(function(button) {
      button.classList.add('hasNotBeenRead')
      button.classList.remove('hasBeenRead')
      updateStorage()
    }) 
  }

  if (checkbox.checked == false){
    book.classList.add('hasBeenRead')
    book.classList.remove('hasNotBeenRead')
    button.forEach(function(button) {
      button.classList.add('hasBeenRead')
      button.classList.remove('hasNotBeenRead')
      updateStorage()
    })
  }

}

function clearStorage(){
  localStorage.clear()
}

function updateStorage(){
  localStorage.setItem("Library", JSON.stringify(Library));
}