import './styles.css';
import template from './templates.hbs';
import search from './fetch';
let currentPage = 0;

document.querySelector('body').insertAdjacentHTML(
  'afterbegin',
  `<form class="search-form" id="search-form">
<input type="text" name="query" autocomplete="off" placeholder="Search images..." />
</form>`,
);

const currentInput = document.querySelector('#search-form');
const classBtn = document.querySelector('#btn-load-more');
const loadList = document.querySelector('#load-list');
const input = document.querySelector('input');

classBtn.addEventListener('click', onInput);
currentInput.addEventListener('submit', onKeyDown);

function parseData(data) {
  const container = template(data);
  loadList.insertAdjacentHTML('beforeend', container);
}

function onInput() {
  search(input.value, ++currentPage, parseData);
}

function onKeyDown() {
  event.preventDefault();
  search(input.value, ++currentPage, parseData);
  clearResults();
}

function clearResults() {
  loadList.innerHTML = '';
}
