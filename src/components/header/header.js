import './_header.scss';

const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const navigation = document.getElementById('navigation');
export const darkBg = document.getElementById('dark-bgd');

openNavBtn.addEventListener('click', () => {
    navigation.classList.add('nav--active');
    darkBg.classList.add('dark-background--active');
});

closeNavBtn.addEventListener('click', () => {
    navigation.classList.remove('nav--active');
    darkBg.classList.remove('dark-background--active');
})
