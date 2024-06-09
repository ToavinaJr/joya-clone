import { drawCard , drawCardCategory, drawDetailedCard} from "./components/Card.js";

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

                if ( targets == undefined || targets.length == 0 ||  targets == null) {
                    main.innerHTML +=  `<div style="text-align:center; font-size:32px; color: #000;">Il n'y a plus de produits disponibles </div>`
                    return
                }
                else main.append(cardContainer)

                console.log(data[targetName]);
                targets.forEach( target => drawCard(cardContainer, target))
                
            })
        }

        let cardCategoryContainer = document.querySelector('#category-container')
        console.log(cardCategoryContainer);

        for (let i=0; i<3; i++) {
            console.log(dataItem[i]);
            drawCardCategory(cardCategoryContainer , dataItem[i]);
        }

        let cards = document.querySelectorAll('.card');
        cards.forEach( card => {
            card.addEventListener('click', () => {
                console.log(card);

                let img = card.querySelector('img')
                let path = img.src
                
                let object = {
                    'image': img
                }

                drawDetailedCard(main, object)
            })  
        })

        let menuToogle  = document.querySelector('#menu-toogle')

        menuToogle.addEventListener('click', () => {
            let menuContents = document.querySelectorAll('.menu-content')

            // On gere le menu toogle en mode mobile
            if (menuToogle.classList.contains('desactive')) {
                menuToogle.classList.remove('desactive')
                menuToogle.classList.add('active')

                for(let i=0; i<menuContents.length; i++) {
                    menuContents[i].style.display = "flex"
                }
            }
            else {
                menuToogle.classList.remove('active')
                menuToogle.classList.add('desactive')

                for(let i=0; i<menuContents.length; i++) {
                    menuContents[i].style.display = "none"
                }
            }
        })

        let menuListTitle = document.querySelectorAll('.list-title')
        console.log(menuListTitle);

        
        for (let i=0; i<menuListTitle.length; i++) {
            menuListTitle[i].addEventListener('click', () => {
                if (parseInt(window.innerWidth) <= 400) {
                    let parent =  menuListTitle[i].parentNode
                    let menuList = parent.querySelector('.menu-list')

                    console.log(menuList);

                    if (menuList.style.display === "flex")
                        menuList.style.display = "none"
                    else menuList.style.display = "flex"
                }
            })
        }
    });