let phone = document.getElementById('phone');
let office = document.getElementById('office')
let musicSpeaker = document.getElementById('musicSpeaker');
let category = '';



// Onclick de la barre de Nav relié aux categories

// Onclick Phone
phone.onclick = function (element) {
    document.getElementById('products').innerHTML = "";
    category = 'Phone'
    let arrayProductByCategory = productByCategory(category)
    arrayProductByCategory.forEach(showProduct)
}

// Onclick Enceinte
musicSpeaker.onclick = function (element) {
    document.getElementById('products').innerHTML = "";
    category = 'Enceinte'
    let arrayProductByCategory = productByCategory(category)
    arrayProductByCategory.forEach(showProduct)
}

// Onclick Bureautique 
office.onclick = function (element) {
    document.getElementById('products').innerHTML = "";
    category = 'Bureautique'
    let arrayProductByCategory = productByCategory(category)
    arrayProductByCategory.forEach(showProduct)
}

// Fonction qui push la categorie dans le tableau vide de base
function productByCategory(category){
    let productFilter = [];
    arrayProduct.forEach(function(element) {
        if(element.category == category){
            productFilter.push(element);
        }
        
    })
    return productFilter;
    };
    
    
