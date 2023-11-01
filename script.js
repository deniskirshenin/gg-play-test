const button = document.querySelector('.hero__button');
const closeButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');

button.addEventListener('click', () => {
    modal.classList.add('modal--open');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal--open');
})

window.addEventListener('click', (evt) => {
    if(evt.target == modal) {
        modal.classList.remove('modal--open');
    }
})
