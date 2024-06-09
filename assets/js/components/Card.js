const drawCard = ( parent, data ) => {
    let prixActuel = data['old-price'] - data['price-reduction']
    let starsHTML = "";
    for (let i=0; i<data.etoile; i++)
        starsHTML += `<i class="fa-solid fa-star"></i>`
    parent.innerHTML += `<div class="card">
                    <div class="card-image-container">
                        <img class="card-image" src="${data.image}" alt="">
                    </div>
                    <div class="details">
                        <span class="description">${data.description}</span>
                        <div class="prices-container">
                            <span class="old-price">${data['old-price']}</span>
                            <span class="price-reduction">-${data['price-reduction']}</span>
                            <span class="actual-price">${prixActuel}</span>
                        </div>
                        <div class="stars-container">
                            ${starsHTML}
                        </div>
                    </div>
                </div>
        `
}

export {drawCard}