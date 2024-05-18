import { galleryItems } from "./gallery-items.js";
// Change code below this line

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>
const gallery = document.querySelector(".gallery");
const markupOfGallary = createGallaryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", markupOfGallary);

gallery.addEventListener("click", onGalleryClick);

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </li>`;
    })
    .join("");
}

function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName != "IMG") {
    return;
  }
  //   console.log(evt.target);
  const largeImage = evt.target.dataset.source;

  openLargeImage(largeImage);
  //       const instance = basicLightbox.create(`
  //       <img src="assets/images/image.png" width="800" height="600">
  //   `);

  //       instance.show();
}

function openLargeImage(largeImage) {
  const instance = basicLightbox.create(
    `
    <img src="${largeImage}" width="1280" height="853">
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (evt) => {
          if (evt.code === "Escape") {
            instance.close();
          }
        });
      },
    }
  );
  instance.show();
}

// console.log(markupOfGallary);
