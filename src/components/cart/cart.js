import './_cart.scss';

export const cart = {
    icon: document.getElementById('cart-icon'),
    iconNumber: document.getElementById('cart-icon-number'),
    component: document.getElementById('cart-component'),
    container: document.getElementById('cart-container'),
    info: document.getElementById('cart-info'),
    checkoutBtn: document.getElementById('cart-btn'),
}

cart.icon.addEventListener('click', () => {
    cart.component.classList.toggle('cart--active');
})