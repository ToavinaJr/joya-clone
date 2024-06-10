import { drawCard , drawCardCategory, drawDetailedCard} from "./components/Card.js";

fetch('/assets/data/data.json')
    .then ( res => res.json() )
    .then( data => {
        let dataJson = data
        let cardContainer = document.getElementById('card-container')
        // console.log(data);

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
        // console.log(cardCategoryContainer);

        for (let i=0; i<3; i++) {
            // console.log(dataItem[i]);
            drawCardCategory(cardCategoryContainer , dataItem[i]);
        }

        
        let cards = document.querySelectorAll('.card')

        for (let i=0; i<cards.length; i++) {
            console.log(cards[i]);
        }

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
        // console.log(menuListTitle);

        // FOnctionnalite pour gerer le menu-toogle
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

        // FOnctionnalité pour gérer la recherche
        let inputSearch = document.querySelector('#input-catalogue')


        let caretLeft =  document.querySelector('#caret-left')
        let caretRight =  document.querySelector('#caret-right')
        let navImage = document.querySelector('#nav-image')
        
        let index = 0;
        
        caretLeft.addEventListener('click', () => {
            index--
            index = Math.abs(index) % 2

            let srcNavImage = `./img/background/nav-image-${index}.webp`
            navImage.src = srcNavImage
            
        })
        caretRight.addEventListener('click', () => {
            index++
            index %= 2
            console.log("right", index);
            let srcNavImage = `./img/background/nav-image-${index}.webp`
            navImage.src = srcNavImage
        })

        

        inputSearch.addEventListener('keyup', (data) => {
            let target = inputSearch.value
            let title = document.getElementById('main-title').textContent.toLowerCase()
            
            for ( item of data[title] ) {
                if (item.name.contains(target)) {
                    result.push(item)
                    drawCard(main, item) 
                }
            }
        })
    });