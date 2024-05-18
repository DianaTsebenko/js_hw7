import { galleryItems } from "./gallery-items.js";
// Change code below this line

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>
const gallery = document.querySelector(".gallery");
const markupOfGallary = createGallaryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", markupOfGallary);

// gallery.addEventListener("click", onGalleryClick);

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
