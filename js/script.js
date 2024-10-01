document.addEventListener('DOMContentLoaded', () => {
    const cardBody = document.querySelector('.card__body');
    const lungeIcon = document.querySelector('.lunge__icon');
    const cardText = document.querySelector('.card__text');

    lungeIcon.addEventListener('click', () => {
        if (cardBody.classList.contains('expanded')) {
            cardBody.classList.remove('expanded');
            lungeIcon.classList.remove('rotated');
        } else {
            cardBody.classList.add('expanded');
            lungeIcon.classList.add('rotated');
        }
    });
});
