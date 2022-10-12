import './_gallery.scss';
import { lightbox } from '../lightbox/lightbox';
import { darkBg } from '../header/header';

export let CLICKED_IMAGE = 1;


class Gallery {
    constructor({ galleryImages, galleryMainImage }) {
        this.galleryImages = galleryImages;
        this.galleryMainImage = galleryMainImage;
        this.init();
    }

    init() {
        this.galleryMainImage.addEventListener('click', this.openLightbox);
        this.galleryImages.forEach(img => img.addEventListener('click', (e) => this.changeImage(e)));
    }

    openLightbox() {
        lightbox.container.classList.add('gallery-lightbox--active');
        darkBg.classList.add('dark-background--active');
    }

    changeImage(e) {
        this.changeThumbnail(e);
        CLICKED_IMAGE = e.target.dataset.id;
        this.galleryMainImage.setAttribute('src', `images/image-product-${CLICKED_IMAGE}.jpg`)
    }

    changeThumbnail(event) {
        this.galleryImages.forEach(img => img.classList.remove('gallery-desktop__carousel-element--active'))
        event.target.classList.add('gallery-desktop__carousel-element--active');
    }
}

export const gallery = new Gallery({
    galleryImages: [...document.querySelectorAll('.gallery-desktop__carousel-element')],
    galleryMainImage: document.querySelector('.gallery-desktop__main'),
});
