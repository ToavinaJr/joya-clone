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
    let optionsHTML = ''
    for (let i=0; i<data.optionsValue.length; i++)
        optionsHTML += `<option value="${data.optionsValue[i]}">${data.optionsValue[i]}</option>`

    parent.innerHTML =  `
                        <div id="panier-container">
                            <div>
                                <img class="card-image" src="${data.image}" alt="">
                            </div>
                            <div id="panier-content">
                                <h1>${data.name}</h1>
                                <p>${data.description}</p>
                                <hr>
                                <form id="form-panier">
                                    <div id="form-content">
                                        <label>${data.optionsName}</label>
                                        <select>
                                            ${optionsHTML}
                                        </select>
                                    </div>
                                    <input id="submit-panier" type="submit" value="Ajouter au panier">
                                </form>
                                <div>
                                    <div id="service-client" class="service-item">
                                    <img src="./img/icon/ico_customer_service.png" alt="Service client">
                                    <span>Service client : au <a href="" id="num-service">+261 34 16 540 07</a></span> 
                                    </div>
                                    <div id="service-livraison" class="service-item">
                                        <img src="./img/icon/ico_shipping.png" alt="Service de livraison">
                                        <span>Livraison mondial à partir de 100€</span>
                                    </div>
                                    <div id="service-collect" class="service-item">
                                        <img src="./img/icon/ico_click_collect.png" alt="Service de service-collect">
                                        <span>Click& Collect - La Grande Motte</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
}

export { drawCard, drawCardCategory, drawDetailledCard }
