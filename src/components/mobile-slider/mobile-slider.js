import './_mobile-slider.scss';

class MobileSlider {
    constructor() {
        this.slideSpace = document.getElementById('slider-mobile');
        this.leftArrow = document.getElementById('mobile-left-arrow');
        this.rightArrow = document.getElementById('mobile-right-arrow');
        this.currentSlide = 1;
        this.slidesNumber = 4;
        this.init();
    }

    init() {
        this.displaySlide(this.currentSlide);
        this.leftArrow.addEventListener('click', () => this.slideLeft());
        this.rightArrow.addEventListener('click', () => this.slideRight());
    }

    displaySlide(slideIndex) {
        this.slideSpace.style.backgroundImage = `url('images/image-product-${slideIndex}.jpg')`
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
}

const mobileSlider = new MobileSlider();