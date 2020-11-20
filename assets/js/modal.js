let panier = [
    // Categorie charge base

    // Support 1
    {name:"Wood Flow", ref: "r001", category: "Phone", price : "29.90", description : "Station de beau téléphone. Fait à la main à partir de bois d’orme recyclé magnifique. Ajouter une touche de nature à votre espace de travail ou à domicile avec une station de téléphone en bois naturel. ", img : "assets/img/Phone1"},

    // Support 2
    // {name: "Wood magic", ref: "r002", category : "Phone", category : "Phone", price : "28.65", description : "Vous cherchez toujours vos câbles de recharge et ne savez jamais où mettre votre téléphone ? Voici la station Magic", img : "assets/img/Phone2"},
]
let originalProduct = document.querySelector('cardModal');

function showProductModal(element, index){
    document.querySelector('#card-product .img-card').src = element.img
    document.querySelector('#card-product .title-card').innerHTML = element.name
    document.querySelector('#card-product .price-card').innerHTML = element.price
        }
    

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