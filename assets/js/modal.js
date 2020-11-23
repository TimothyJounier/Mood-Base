
let originalProduct = document.querySelector('cardModal');

function showProductModal(element, index) {
    document.querySelector('#card-product .img-card').src = element.img
    document.querySelector('#card-product .title-card').innerHTML = element.name;
    document.querySelector('#card-product .price-card').innerHTML = element.price;

    let clone = originalProduct.cloneNode(true); //"deep" clone
    clone.id = 'cardModal' + index;
    products.appendChild(clone);
}
arrayProduct.forEach(showProductModal);

let productModal = document.querySelector('#shoppingModal .modal-body .cardModal').innerHTML = ref;





























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