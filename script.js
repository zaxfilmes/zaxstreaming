// script.js

// Exemplo de interatividade - Quando o usuário clica no filme
const movieItems = document.querySelectorAll('.movie-item');

movieItems.forEach(item => {
    item.addEventListener('click', () => {
        alert('Você clicou no filme!');
    });
});
