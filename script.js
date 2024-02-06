document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const loveGifContainer = document.getElementById('loveGifContainer');

    // Déplace le bouton "Non" lors du survol
    noButton.addEventListener('mouseover', function() {
        const newX = Math.random() * (window.innerWidth - noButton.clientWidth);
        const newY = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    // Cache le bouton "Non" et affiche les GIFs d'amour après le clic sur "Oui"
    yesButton.addEventListener('click', function() {
        loveGifContainer.style.display = 'flex';
        noButton.style.display = 'none';
    });
});
