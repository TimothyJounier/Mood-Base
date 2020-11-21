//Essaie 2 
//Remplacer ici le .add-cart par l'id qui sera généré dans les cards 
let carts = document.querySelectorAll('.add-cart');

let panier = [{
        name: "Wood Flow",
        ref: "r001",
        category: "Phone",
        price: 29.90,
        description: "Station de beau téléphone. Fait à la main à partir de bois d’orme recyclé magnifique. Ajouter une touche de nature à votre espace de travail ou à domicile avec une station de téléphone en bois naturel. ",
        img: "assets/img/Phone1",
        inCart: 0
    },

    {
        name: "Wood magic",
        ref: "r002",
        category: "Phone",
        price: "28.65",
        description: "Vous cherchez toujours vos câbles de recharge et ne savez jamais où mettre votre téléphone ? Voici la station Magic",
        img: "assets/img/Phone2",
        inCart: 0
    },
    {
        name: "Wood magzzzzzic",
        ref: "r003",
        category: "Phone",
        price: "28.65",
        description: "Vous cherchez toujours vos câbles de recharge et ne savez jamais où mettre votre téléphone ? Voici la station Magic",
        img: "assets/img/Phone2",
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(panier[0]);
        totalCost(panier[i])
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

cartNumbers = (product) => {

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

    setItem(product);
}

setItem = (product) => {
        let cartItems = localStorage.getItem('productsInCart')
        cartItems = JSON.parse(cartItems);


        if (cartItems != null) {
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.ref]: product
                }
            }
            cartItems[product.ref].inCart += 1;
        } else {
            product.inCart = 1;
            cartItems = {
                [product.ref]: product
            }
        }
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }
    //fonction pour calculer le montant total de cart
totalCost = (product) => {
    // console.log('The product price is :', product.price);
    let cartCost = localStorage.getItem('totalCost');


    console.log('My cartCost is', cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}
onLoadCartNumbers();



















// Essaie 1 

// let panier = [

// Support 1
// {
//     name: "Wood Flow",
//     ref: "r001",
//     category: "Phone",
//     price: "29.90",
//     description: "Station de beau téléphone. Fait à la main à partir de bois d’orme recyclé magnifique. Ajouter une touche de nature à votre espace de travail ou à domicile avec une station de téléphone en bois naturel. ",
//     img: "assets/img/Phone1"
// },

// Support 2
//     { name: "Wood magic", ref: "r002", category: "Phone", category: "Phone", price: "28.65", description: "Vous cherchez toujours vos câbles de recharge et ne savez jamais où mettre votre téléphone ? Voici la station Magic", img: "assets/img/Phone2" },
// ]
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