

export default class UI {
    static getBookLS = () => {
        let bookLocalStore;
        if (localStorage.getItem('books') === null) {
          bookLocalStore = [];
        } else {
          bookLocalStore = JSON.parse(localStorage.getItem('books'));
        }
        return bookLocalStore;
      }
    
      static add = (book) => {
        const bookList = this.getBookLS();
        bookList.push(book);
        localStorage.setItem('books', JSON.stringify(bookList));
      }
     
      static removeBook=(title, author)=> {
        const bookList = this.getBookLS();
        bookList.forEach((book, index) => {
          if (book.title === title && book.author === author) {
            bookList.splice(index, 1);
            
          }
        });
        localStorage.setItem('books', JSON.stringify(bookList));
      }
    
      static displayBooks = () => {
        const books = this.getBookLS();
        books.forEach((book) => this.libraryBooks(book));
      }
    
      static libraryBooks = (book) => {

          const bookscontainer = document.querySelector('.books-container');

          let titleauthor = document.createElement('div');
          titleauthor.classList.add('list-container')
             titleauthor.innerHTML = `<div class="new-lib ${book.author}">
             <p><q>${book.title}</q> by <i>${book.author}</i></p>
               <button class="remove">
               Remove
               </button>
               </div>`;
              bookscontainer.appendChild(titleauthor);
      }
    
      static deleteBook = (el) => {
        if (el.classList.contains('remove')) {
          el.parentElement.parentElement.remove();
        }
      }
    
      static clearFields = () => {
        const bookauthor = document.querySelector('.bookauthor-input');
        const booktitle = document.querySelector('.booktitle-input');
          booktitle.value = "";
          bookauthor.value = "";
      }
    }
