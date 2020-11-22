let original = document.querySelector('#card-product');
let products = document.getElementById('products')

function showProduct(element, index) {
    document.querySelector('#card-product .img-card').src = element.img
    document.querySelector('#card-product .title-card').innerHTML = element.name
    document.querySelector('#card-product .description-card').innerHTML = element.description
    document.querySelector('#card-product .price-card').innerHTML = element.price
    let clone = original.cloneNode(true); //"deep" clone

    clone.id = 'card-product' + index;
    products.appendChild(clone);
}

arrayProduct.forEach(showProduct)