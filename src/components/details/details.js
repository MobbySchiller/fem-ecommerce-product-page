import './_details.scss';
import { cart } from '../cart/cart';

const details = {
    productName: document.getElementById('product-name').textContent,
    currentPrice: document.getElementById('current-price').textContent.slice(1),
    selectedQuantity: 0,
    productsInCart: 0,
    productID: 1,
};

const selector = {
    quantityAddBtn: document.getElementById('quantity-add'),
    quantityRemoveBtn: document.getElementById('quantity-remove'),
    quantityCounter: document.getElementById('quantity-counter'),
    addCartBtn: document.getElementById('add-to-cart'),
};

selector.quantityAddBtn.addEventListener('click', () => {
    details.selectedQuantity++;
    displayQuantity();
});

selector.quantityRemoveBtn.addEventListener('click', () => {
    ``
    details.selectedQuantity--;
    if (details.selectedQuantity < 0) {
        details.selectedQuantity = 0;
    }
    displayQuantity();
});

selector.addCartBtn.addEventListener('click', () => {
    if (details.selectedQuantity) {
        cart.info.classList.remove('info--active');
        cart.checkoutBtn.classList.add('cart__button--active');
        createCartElement();
    }
})

const createCartElement = () => {
    const element = document.createElement('div');
    element.classList.add('element');

    const elementPic = document.createElement('div');
    elementPic.classList.add('element__pic');
    elementPic.style.backgroundImage = `url("images/image-product-${details.productID}-thumbnail.jpg")`;

    const elementDesc = document.createElement('div');
    elementDesc.classList.add('element__desc');

    const elementName = document.createElement('p');
    elementName.classList.add('element__name');
    elementName.textContent = details.productName;

    const elementDetails = document.createElement('p');
    elementDetails.classList.add('element__details');

    console.log(elementDetails);

    const elementDetailsPrice = document.createElement('span');
    elementDetailsPrice.classList.add('element__details-price');
    const elementDetailsQuantity = document.createElement('span');
    elementDetailsQuantity.classList.add('element__details-quantity');
    const elementDetailsSum = document.createElement('span');
    elementDetailsSum.classList.add('element__details-sum');

    console.log(elementDetailsPrice);

    elementDetailsPrice.textContent = `$${details.currentPrice}`;
    elementDetailsQuantity.textContent = ` x ${details.selectedQuantity} `;
    elementDetailsSum.textContent = `$${(details.currentPrice * details.selectedQuantity).toFixed(2)}`;

    console.log(elementDetailsPrice);

    elementDetails.appendChild(elementDetailsPrice);
    elementDetails.appendChild(elementDetailsQuantity);
    elementDetails.appendChild(elementDetailsSum);

    elementDesc.appendChild(elementName);
    elementDesc.appendChild(elementDetails);

    const elementRemove = document.createElement('div');
    elementRemove.classList.add('element__remove');
    elementRemove.addEventListener('click', () => removeFromCart(element));

    element.appendChild(elementPic);
    element.appendChild(elementDesc);
    element.appendChild(elementRemove);
    cart.container.appendChild(element);
    details.productsInCart++;
    setIconNumber();
}

const setIconNumber = () => {
    if (details.productsInCart > 0) {
        cart.iconNumber.style.display = 'block';
        cart.iconNumber.textContent = details.productsInCart;
    } else {
        cart.iconNumber.style.display = 'none';
    }

}

const removeFromCart = (element) => {
    details.productsInCart--;
    cart.container.removeChild(element);
    setIconNumber();
    if (!details.productsInCart) {
        cart.info.classList.add('info--active');
        cart.checkoutBtn.classList.remove('cart__button--active');
    }
}

const displayQuantity = () => {
    selector.quantityCounter.textContent = details.selectedQuantity;
}