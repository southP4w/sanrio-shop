document.addEventListener('DOMContentLoaded', function () {
    const bowsContainer = document.querySelector('.bows-container');

    const bows = ['🎀', '🎀', '🎀', '🎀', '🎀'];

    bows.forEach((bow, index) => {
        const bowElement = document.createElement('span');
        bowElement.className = 'bow';
        bowElement.innerHTML = bow;
        bowsContainer.appendChild(bowElement);

        // Delay the appearance of each bow
        setTimeout(() => {
            bowElement.style.opacity = '1';
        }, index * 200);
    });
});