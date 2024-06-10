import { drawCard , drawCardCategory, drawDetailledCard} from "./components/Card.js";

fetch('/assets/data/data.json')
    .then ( res => res.json() )
    .then( data => {
        let cardContainer = document.getElementById('card-container')
        let dataItem = data["nouveautes"]
        
        // Afficher les cartes nouveaux
        dataItem.forEach( item => {
            drawCard(cardContainer, item)
        });

        // 
        let menuListItem = document.getElementsByClassName('menu-list-item')
        let main = document.querySelector('#main')
        
        // ÉCOUTES DES CLICKS POUR TOUTES LES LISTES
        for (let i=0; i < menuListItem.length; i++) {
            menuListItem[i].addEventListener('click', () => {
                let cardContainer = document.createElement('div')
                cardContainer.id = 'card-container'

                let targetName = menuListItem[i].textContent.toLowerCase();
                let targets = data[targetName]
                console.log(targetName);
                main.innerHTML = `<h1 id="main-title">${targetName.toUpperCase()}</h1>`

                if ( targets == undefined || targets.length == 0 ||  targets == null)
                    main.innerHTML +=  `<div style="text-align:center; font-size:32px; color: #000;">
                                            Il n'y a plus de produits disponibles
                                        </div>`
                
                else main.append(cardContainer)

                targets.forEach( target => drawCard(cardContainer, target))
            })
            
        }

        // DESSINER LES CATEGORIES
        let cardCategoryContainer = document.querySelector('#category-container')
        for (let i=0; i<3; i++) {
            drawCardCategory(cardCategoryContainer , dataItem[i]);
        }

        // ÉCOUTES DU MENU TOOGLE
        let menuToogle  = document.querySelector('#menu-toogle')
        menuToogle.addEventListener('click', () => {
            let menuContents = document.querySelectorAll('.menu-content')

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

        // ÉCOUTES DU CLICK EN MODE MOBILE
        let menuListTitle = document.querySelectorAll('.list-title')
        for (let i=0; i<menuListTitle.length; i++) {
            menuListTitle[i].addEventListener('click', () => {
                if (parseInt(window.innerWidth) <= 400) {
                    let parent =  menuListTitle[i].parentNode
                    let menuList = parent.querySelector('.menu-list')

                    if (menuList.style.display === "flex")
                        menuList.style.display = "none"
                    else menuList.style.display = "flex"
                }
            })
        }

        // On gère la caroussel
        let caretLeft =  document.querySelector('#caret-left')
        let caretRight =  document.querySelector('#caret-right')
        
        let navImage = document.querySelector('#nav-image')        
        let index = 0
        let srcNavImage = `./img/background/nav-image-${index}.webp`
        
        caretLeft.addEventListener('click', () => {
            index--
            index = Math.abs(index) % 2
            navImage.src = srcNavImage   
        })
        caretRight.addEventListener('click', () => {
            index++
            index %= 2
            navImage.src = srcNavImage
        })

        // On gère le click des cards
        
        let cards = document.querySelectorAll('.card')
        cards.forEach(card => {
            card.addEventListener('click', () => {
                let path = card.querySelector('img').src

                let obj = {
                    "image": path,
                    "name" : "Rabe",
                    "description": "kaizakaiza",
                    "optionsName" : "Pointure",
                    "optionsValue" : [32, 46, 54]
                }
                drawDetailledCard(main, obj)
            })
        })
    });