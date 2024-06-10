import { renderPhotoList, showQueryError } from './render-function.js';

export function pixabayRequest(searchParams, container) {
  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(photos => renderPhotoList(photos, container))
    .catch(error => showQueryError(error));
}
