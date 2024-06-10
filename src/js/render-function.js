// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery li a');
gallery.on('show.simplelightbox', function () {
  // do something…
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e); // some usefull information
});
export function showQueryError(error) {
  console.log(error);
  iziToast.show({
    title: '',
    icon: 'icon-person',
    color: 'red', // blue, red, green, yellow
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
export function renderPhotoList(photos, container) {
  console.log(photos);
  const markup = photos.hits
    .map(photo => {
      return `<li>
                <a href="${photo.largeImageURL}"><img src='${photo.webformatURL}' alt='${photo.tags}'></a>
                <div class="content">
                    <div class="item"><h3>Likes</h3><p>${photo.likes}</p></div>
                    <div class="item"><h3>Views</h3><p>${photo.views}</p></div>
                    <div class="item"><h3>Comments</h3><p>${photo.comments}</p></div>
                    <div class="item"><h3>Downloads</h3><p>${photo.downloads}</p></div>
                </div>
            </li>`;
    })
    .join('');
  container.textContent = '';
  container.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
