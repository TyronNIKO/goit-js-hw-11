import { pixabayRequest } from './js/pixabay-api.js';

const fetchPhotoForm = document.querySelector('form');
const photoList = document.querySelector('.photo-list');

let searchParams = new URLSearchParams({
  key: '7706316-da1567048322714709989c4f8',
  q: 'blue+car',
  lang: 'en',
  id: '',
  image_type: 'all',
  orientation: 'horizontal',
  category: '',
  min_width: '0',
  min_height: '0',
  colors: '',
  editors_choice: false,
  safesearch: true,
  order: 'popular',
  page: 1,
  per_page: 10,
  callback: '',
  pretty: false,
});

fetchPhotoForm.addEventListener('submit', e => {
  console.log(e.target);
  e.preventDefault();
  pixabayRequest(searchParams, photoList);
});
