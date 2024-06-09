import { drawCard } from "./components/Card.js";

fetch('/assets/data/data.json')
    .then ( res => res.json() )
    .then( data => {
        let dataJson = data
        let cardContainer = document.getElementById('card-container')
        console.log(data);

        let dataItem = data["nouveautes"]
        dataItem.forEach( item => {
            drawCard(cardContainer, item)
        });

        let menuListItem = document.getElementsByClassName('menu-list-item')
        let main = document.querySelector('#main')

        for (let i=0; i < menuListItem.length; i++) {
            menuListItem[i].addEventListener('click', () => {
                let cardContainer = document.createElement('div')
                cardContainer.id = 'card-container'

                let targetName = menuListItem[i].textContent.toLowerCase();
                let targets = data[targetName]
                console.log(targetName);
                main.innerHTML = `<h1 id="main-title">${targetName.toUpperCase()}</h1>`
                main.append(cardContainer)
                console.log(data[targetName]);
                targets.forEach( target => drawCard(cardContainer, target))
                
            })
        }
    } );