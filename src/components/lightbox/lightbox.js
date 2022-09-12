import './_lightbox.scss';
import { CLICKED_IMAGE } from '../gallery/gallery';

console.log(CLICKED_IMAGE);


class Lightbox {
    constructor({ container, closeIcon, mainImg, leftArrow, rightArrow, galleryImages }) {
        this.container = container;
        this.closeIcon = closeIcon;
        this.mainImg = mainImg
        this.leftArrow = leftArrow;
        this.rightArrow = rightArrow;
        this.galleryImages = galleryImages;
        this.currentSlide = 1;
        this.slidesNumber = 4;
        this.init();
    }

    init() {
        this.closeIcon.addEventListener('click', this.closeLightbox);
        this.galleryImages.forEach(img => img.addEventListener('click', (e) => this.changeImageByThumbnail(e)));
        this.leftArrow.addEventListener('click', () => this.slideLeft());
        this.rightArrow.addEventListener('click', () => this.slideRight());
    }

    displaySlide(slideIndex) {
        this.mainImg.setAttribute('src', `images/image-product-${this.currentSlide}.jpg`);
        this.changeThumbnail();
    }

    changeImageByThumbnail(e) {
        this.galleryImages.forEach(img => img.classList.remove('gallery-lightbox__carousel-element--active'));
        e.target.classList.add('gallery-lightbox__carousel-element--active');
        this.currentSlide = e.target.dataset.id;
        this.mainImg.setAttribute('src', `images/image-product-${this.currentSlide}.jpg`)
    }

    changeThumbnail() {
        this.galleryImages.forEach(img => img.classList.remove('gallery-lightbox__carousel-element--active'));
        this.galleryImages[this.currentSlide - 1].classList.add('gallery-lightbox__carousel-element--active');
    }

    slideLeft() {
        this.counter('left');
        this.displaySlide(this.currentSlide);
    }

    slideRight() {
        this.counter('right');
        this.displaySlide(this.currentSlide);
    }

    counter(direction) {
        if (direction == 'left') {
            this.currentSlide--;
        } else if (direction == 'right') {
            this.currentSlide++
        }

        if (this.currentSlide < 1) {
            this.currentSlide = this.slidesNumber;
        } else if (this.currentSlide > this.slidesNumber) {
            this.currentSlide = 1;
        }
    }

    closeLightbox() {
        lightbox.container.classList.remove('gallery-lightbox--active');
    }
}

export const lightbox = new Lightbox({
    container: document.getElementById('lightbox-container'),
    closeIcon: document.getElementById('lightbox-close-icon'),
    mainImg: document.getElementById('lightbox-main-img'),
    leftArrow: document.getElementById('lightbox-left-arrow'),
    rightArrow: document.getElementById('lightbox-right-arrow'),
    galleryImages: [...document.querySelectorAll('.gallery-lightbox__carousel-element')],
});
