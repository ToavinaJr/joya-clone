const drawCard = ( parent, data ) => {
    let prixActuel = data['old-price'] - data['price-reduction']
    let starsHTML = "";

    // On dessine les étoiles nécessaires
    for (let i=0; i<data.etoile; i++)
        starsHTML += `<i class="fa-solid fa-star"></i>`

    parent.innerHTML += 
                        `<div class="card">
                            <div class="card-image-container">
                                <img class="card-image" src="${data.image}" alt="">
                            </div>
                            <div class="details">
                                <span class="name">${data.name}</span>
                                <span class="description">${data.description}</span>
                                <div class="prices-container">
                                    <span class="old-price">${data['old-price']}€</span>
                                    <span class="price-reduction">-${data['price-reduction']}€</span>
                                    <span class="actual-price">${prixActuel}€</span>
                                </div>
                                <div class="stars-container">
                                    ${starsHTML}
                                </div>
                            </div>
                        </div>`
}

const drawCardCategory = ( parent, data) => {
    let categoryCard  = document.createElement('div')
    let categoryName  = document.createElement('span')
    let categoryImg  = document.createElement('img')

    categoryCard.classList.add('category-card')
    categoryName.classList.add('category-name')
    categoryImg.classList.add('category-image')

    categoryImg.src = data.image

    categoryName.textContent = data.categorie
    categoryCard.append(categoryName, categoryImg)
    parent.append(categoryCard)
}

const drawDetailledCard = ( parent , data ) => {
    parent.innerHTML =  `
                            <div id="main-left">
                                <img src="${data.image}" alt="">
                            </div>
                            <div id="main-right">                  
                            </div>
                        `
}

export { drawCard, drawCardCategory, drawDetailledCard }
