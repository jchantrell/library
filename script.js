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


let Library = [];

function Book(id, title, author, description, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.description = description;
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
  const description = document.createElement('div');
  const descriptionInput = document.createElement('input');
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
        let id = Library.length + 1;
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
        Library.push(newEntry);
        console.log(`Added ${bookTitle} to the library. ID - ${id}`)

        submitButton.remove()
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

function toggleReadStatus(event){
  const label = event.target.parentNode;
  const container = label.parentNode;
  const book = container.parentNode;
  const button = book.querySelectorAll('.submit')
  const checkbox = label.querySelector('input')

  if (checkbox.checked == true){
    book.classList.add('hasNotBeenRead')
    book.classList.remove('hasBeenRead')
    button.forEach(function(button) {
      button.classList.add('hasNotBeenRead')
      button.classList.remove('hasBeenRead')
    }) 
  }

  if (checkbox.checked == false){
    book.classList.add('hasBeenRead')
    book.classList.remove('hasNotBeenRead')
    button.forEach(function(button) {
      button.classList.add('hasBeenRead')
      button.classList.remove('hasNotBeenRead')
    })
  }

}