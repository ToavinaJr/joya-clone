// Assurez-vous que le chemin d'accès est correct selon l'emplacement de votre fichier Card.js
import { drawCard, drawCardCategory, drawDetailedCard } from './components/Card';

const cardHandleClick = () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            const img = card.querySelector('img').src;
            const u = { image: img };
            // Assurez-vous que 'main' est défini ici ou passez le bon élément DOM
            drawDetailedCard(document.querySelector('#main'), u);
        });
    });
};

fetch('/assets/data/data.json')
   .then(res => res.json())
   .then(data => {
        
    })
   .catch(error => console.error('Erreur lors de la récupération des données:', error));