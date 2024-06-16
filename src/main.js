import { pixabayRequest } from './js/pixabay-api';
import { showError } from './js/render-function';
import JsLoader from './js/js-loader';

const fetchPhotoForm = document.querySelector('form');
const photoList = document.querySelector('.photo-list');
const jsLoader = new JsLoader();
jsLoader.init();

let searchParams = new URLSearchParams({
  key: '7706316-da1567048322714709989c4f8',
  q: '',
  lang: 'en',
  id: '',
  image_type: 'photo',
  orientation: 'horizontal',
  category: '',
  min_width: '0',
  min_height: '0',
  colors: '',
  editors_choice: false,
  safesearch: false,
  order: 'popular',
  page: 1,
  per_page: 10,
  callback: '',
  pretty: false,
});

fetchPhotoForm.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = fetchPhotoForm.elements[0].value.trim();
  if (!inputValue) {
    showError('Info', 'Search input must be filled!');
    return;
  }
  searchParams.set('q', fetchPhotoForm.elements[0].value);
  pixabayRequest(searchParams, photoList);
});
