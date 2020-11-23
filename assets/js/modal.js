//Essaie 2 

let carts = document.querySelectorAll('#products .card');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(arrayProduct[i]);
        totalCost(arrayProduct[i]);
    })
}
//fonction pour que le nombre de produit dans le panier reste à sa valeur enregistrée même après le refresh 
onLoadCartNumbers = () => {

    //Lorqu'on lui passe le nom d'une clé, cette méthode renvoie la valeur de la clé correspondante.
    let productNumbers = localStorage.getItem('cartNumbers');

    //.cart correspond à la class du panier dans le barre nav ***** la span correspond au 0 à côté du panier
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

cartNumbers = (productDisplay) => {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        //Le localStorage va permettre d'accéder à un objet local Storage et donc au stockage de session. Ca va permettrere d'ajouter, de modifier ou de supprimer des éléments enregistrés 
        localStorage.setItem('cartNumbers', productNumbers + 1);
        //La méthode setItem() de l'interface Storage, lorsque lui sont passées le duo clé-valeur, les ajoute à l'emplacement de stockage, sinon elle met à jour la valeur si la clé existe déjà. Execption pour la nav privée
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(productDisplay);
}
// Local storage
setItem = (productDisplay) => {
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems);


        if (cartItems != null) {
            if (cartItems[productDisplay.ref] == undefined) {
                cartItems = {
                    ...cartItems,
                    [productDisplay.ref]: productDisplay
                }
            }
            cartItems[productDisplay.ref].inCart += 1;
        } else {
            productDisplay.inCart = 1;
            cartItems = {
                [productDisplay.ref]: productDisplay
            }
        }
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }
    //fonction pour calculer le montant total de cart
totalCost = (productDisplay) => {
    // console.log('The product price is :', product.price);
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + productDisplay.price);
    } else {
        localStorage.setItem('totalCost', productDisplay.price);
    }
}


function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.productsCart');


    // let more = document.querySelectorAll('.addProduct');
    // let less = document.querySelectorAll('.removeProduct');
    // let number = document.querySelectorAll('.count');
    // let count = parseInt(number.innerText)
    // more.onclick = function(e) {
    //     e.preventDefault
    //     count = count + 1
    //     number.innerText = count
    // }
    // less.onclick = function(e) {
    //     e.preventDefault
    //     count = count - 1
    //     number.innerText = count
    // }


    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `<div class="product-title-cart my-3 mx-2">
                 <ion-icon name="close-circle"></ion-icon>
                 <img src="${item.img}"/>
                 <span>${item.name}</span></div>
                 <div class="price-cart">${item.price}€</div>
                 <div class="quantity-cart">
                 <ion-icon class="removeProduct" name="caret-back-circle-outline"></ion-icon>
                 <span class="count">${item.inCart}</span>
                 <ion-icon class="addProduct" name="caret-forward-circle-outline"></ion-icon>
                 </div>
                 <div class="total">
                 ${item.inCart * item.price.toFixed(2)}€
                 </div>
                 `;

 
                  
        });
       
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">Total panier</h4> 
        <h4 class="basketTotal">
        ${cartCost}€</h4>
        </div>
        `;
        

    }
}
onLoadCartNumbers();
displayCart();






// Essaie 1 

// let originalProduct = document.querySelector('cardModal');

// function showProductModal(productsPanier) {
//     document.querySelector('#card-product .img-card').src = element.img
//     document.querySelector('#card-product .title-card').innerHTML = element.name;
//     document.querySelector('#card-product .price-card').innerHTML = element.price;

//     let clone = originalProduct.cloneNode(true); //"deep" clone
//     clone.id = 'cardModal' + index;
//     products.appendChild(clone);
// }
// arrayProduct.forEach(showProductModal);

// let productModal = document.querySelector('#shoppingModal .modal-body .cardModal').innerHTML = ref;
















//Création des variables pour le panier 
// let buttonAddMore = document.getElementById('addArticle');
// let number = document.getElementById('count');
// let count = parseInt(number.innerText);


//appel de la constante 
// const productCatalog = 'assets/js/data-base';

// let refOfProduct = document.getElementById('refOfProduct');
// refOfProduct

// panier = () => {
//     let liste = [];
//     ajouterArticle = ref => {
//         let index = getArticle(ref);
//         if (index == -1) liste.push(new LignePanier(ref));
//         else liste[index].ajouterQte(quantity);
//     }
//     getPrixPanier = () => {
//         let total = 0;
//         for (let i = 0; i < liste.length; i++)
//             total += liste[i].getPrixLigne();
//         return total;
//     }
//     getArticle = ref => {
//         for (var i = 0; i < liste.length; i++)
//             if (code == liste[i].getCode()) return i;
//         return -1;
//     }
//     supprimerArticle = (ref) => {
//         var index = getArticle(ref);
//         if (index > -1) liste.splice(index, 1);
//     }
// }

//Fonction qui donne le résultat du prix total de l'article [i]
// getPriceNewLineShop = () => {
//     let result = price[] * quantityArticle;
//     return result;
// }