let phone = document.getElementById('phone');
let office = document.getElementById('office')
let musicSpeaker = document.getElementById('musicSpeaker');
let category = '';
phone.onclick = function (element) {
    document.getElementById('products').innerHTML = "";
    category = 'Phone'
    let arrayProductByCategory = productByCategory(category)
    arrayProductByCategory.forEach(showProduct)
}
musicSpeaker.onclick = function (element) {
    document.getElementById('products').innerHTML = "";
    category = 'Enceinte'
    let arrayProductByCategory = productByCategory(category)
    arrayProductByCategory.forEach(showProduct)
}
office.onclick = function (element) {
    document.getElementById('products').innerHTML = "";
    category = 'Bureautique'
    let arrayProductByCategory = productByCategory(category)
    arrayProductByCategory.forEach(showProduct)
}


function productByCategory(category){
    let productFilter = [];
    arrayProduct.forEach(function(element) {
        if(element.category == category){
            productFilter.push(element);
        }
        
    })
    return productFilter;
    };
    
    
