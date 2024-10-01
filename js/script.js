document.addEventListener('DOMContentLoaded', () => {
    const cardBody = document.querySelector('.card__body');
    const lungeIcon = document.querySelector('.lunge__icon');
    const lungeBlock = document.querySelector('.lunge__block');
    const cardText = document.querySelector('.card__text');

    lungeBlock.addEventListener('click', () => {
        if (cardBody.classList.contains('expanded')) {
            cardBody.classList.remove('expanded');
            lungeIcon.classList.remove('rotated');
        } else {
            cardBody.classList.add('expanded');
            lungeIcon.classList.add('rotated');
        }
    });
});
