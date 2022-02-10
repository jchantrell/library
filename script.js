document.body.addEventListener('click', function(event){
  if(event.target.classList.contains('add')) {
    createBook(event);
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

function createBook(event) {
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
  const switchLabel = document.createElement('label');
  const switchInput = document.createElement('input');
  const switchContainer = document.createElement('span')
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
  
  read.appendChild(switchLabel)
  switchLabel.classList.add('switch')
  switchLabel.appendChild(switchInput)
  switchInput.type = 'checkbox'
  switchLabel.appendChild(switchContainer)
  switchContainer.classList.add('slider')


  function submitBook(){
    document.querySelectorAll('.submit').forEach(button => {
      button.addEventListener('click', function(){
        let id = Library.length + 1;
        let bookTitle = titleInput.value;
        let bookAuthor = authorInput.value;
        let bookPages = pagesInput.value;
        if (switchInput.checked == true){
          bookRead = true;
        }
        if (switchInput.checked != true){
          bookRead = false;
        }

        let newEntry = new Book(id, bookTitle, bookAuthor, bookPages, bookRead);
        Library.push(newEntry);
        console.log(`Added ${bookTitle} to the library. ID - ${id}`)

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
  book = Library.find(b => b.id == id)
  book = null;
  selected.remove();
  console.log(`Removed ${title} from the library. ID - ${id}`);
};
