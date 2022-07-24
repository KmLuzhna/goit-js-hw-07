import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const createGallryConteiner = galleryItems
.map( ({preview, original, description}) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src= '${preview}'
      data-source = '${original}'
      alt= '${description}'
    />
  </a>
</div>`})
.join("");

galleryContainer.insertAdjacentHTML("afterbegin", createGallryConteiner);


function selectImage (event) {
    event.preventDefault();
    if(event.target.classList.contains(".gallery")) {
        return;
    }
    console.log(event.target.dataset.source);
   const originalImg = event.target.dataset.source;

   const instance = basicLightbox.create(`
    <img src= "${originalImg}" width="800px" height="600px">
`)
instance.show()
}
galleryContainer.addEventListener('click', selectImage);




