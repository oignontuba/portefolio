const customCursor = document.querySelector('.custom-cursor');

// Mettre à jour la position du curseur personnalisé en fonction de la souris
document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});