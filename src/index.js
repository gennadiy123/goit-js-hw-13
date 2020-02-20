import './styles.css';
import template from './templates.hbs';
import search from './fetch';
let currentPage = 0;

const input = document.querySelector('#input-id');
const classBtn = document.querySelector('#btn-load-more');
const loadList = document.querySelector('#load-list');
classBtn.addEventListener('click', onInput);
input.addEventListener('keydown', onKeyDown);

function parseData(data) {
    const container = template(data);
    // loadList.innerHTML += container;
    loadList.insertAdjacentHTML('beforeend', container);
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
}

function onInput(event) {
    search(input.value, ++currentPage, parseData);
    
  }

  function onKeyDown(event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        search(input.value, ++currentPage, parseData);
        clearResults()
    }
    
    
  }

  function clearResults() {
    loadList.innerHTML = '';
  }
  
