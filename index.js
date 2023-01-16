import Book from './modules/class.js';
import UI from './modules/main.js';
import { DateTime } from './modules/lexon.js';

const bookauthor = document.querySelector('.bookauthor-input');
const booktitle = document.querySelector('.booktitle-input');
const bookscontainer = document.querySelector('.books-container');
const form = document.querySelector('.form');
const listings = document.querySelector('.listings');
const listclick = document.querySelector('#list-click');
const addclick = document.querySelector('#add-click');
const contactclick = document.querySelector('#contact-click');
const maincontact = document.querySelector('.main-contact');


window.onload = () => {
    UI.displayBooks();
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    booktitle.value;
    bookauthor.value;
    if (booktitle.value !== '' && bookauthor.value !== '') {
      const book = new Book(booktitle.value, bookauthor.value);
      UI.libraryBooks(book);
      UI.add(book);
      UI.clearFields();
    }
  });
  
  bookscontainer.addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    const fe = e.target.previousSibling.previousSibling;
    UI.removeBook(fe.firstChild.textContent, fe.lastChild.textContent);
    document.location.reload(true);
  });

  listclick.addEventListener('click', function(e){
    e.preventDefault();
     listings.style.display = 'block';
     form.style.display = 'none';
     maincontact.style.display = 'none';
     
  });

  addclick.addEventListener('click', function(e){
    e.preventDefault();
     form.style.display = 'block';
     listings.style.display = 'none';
     maincontact.style.display = 'none';
  });

  contactclick.addEventListener('click', function(e){
    e.preventDefault();
     maincontact.style.display = 'block';
     listings.style.display = 'none';
     form.style.display = 'none';
  });

  setInterval(()=>{
    const date = document.querySelector('.date');
    const dt =DateTime.now(); 
  date.innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL);

  },10)