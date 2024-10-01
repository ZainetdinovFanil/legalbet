
const cardBody = document.querySelector('.card__body');
cardBody.style.maxHeight = '120px';  //первая анимация открытия моментальная, а не плавная

document.addEventListener('DOMContentLoaded', () => {
    const cardBody = document.querySelector('.card__body');
    const lungeIcon = document.querySelector('.lunge__icon');
    const cardText = document.querySelector('.card__text');

    lungeIcon.addEventListener('click', () => {
        if (cardBody.classList.contains('expanded')) {
            cardBody.classList.remove('expanded');
            lungeIcon.classList.remove('rotated');
            cardBody.style.maxHeight = '120px'; 
        } else {
            cardBody.classList.add('expanded');
            lungeIcon.classList.add('rotated');
            cardBody.style.maxHeight = cardText.scrollHeight + 'px';
        }
    });
});
