//Appel de la fonction du panier : constitué de ligne panier (newLineShop), la ligne est dédié à un article choisi

// function newLineShop(name, description, img, price, quantity, code, category) {
//     this.nameArticle = name;
//     this.codeArticle = code; 
//     this.categoryArticle = category;
//     this.descriptionArticle = description;
//     this.imgArticle = img;
//     this.priceArticle = price;
//     this.quantityArticle = quantity;


//     this.getCode = function(){
//         return this.codeArticle;
//     } 

// }


let refOfProduct = document.getElementById('refOfProduct');
refOfProduct

panier = () => {
    let list = [];
    ajouterArticle = (ref) => {
        let index = getArticle(ref);
        if (index == -1) liste.push(new LignePanier(ref));
        else liste[index].ajouterQte(quantity);
    }
    getPrixPanier = () => {
        let total = 0;
        for (let i = 0; i < liste.length; i++)
            total += liste[i].getPrixLigne();
        return total;
    }
    getArticle =  (ref) => {
        for (var i = 0; i < liste.length; i++)
            if (code == liste[i].getCode()) return i;
        return -1;
    }
    supprimerArticle = (ref) => {
        var index = getArticle(ref);
        if (index > -1) liste.splice(index, 1);
    }
}
console.log('panier');




// fonction reliée au bouton "+" du panier pour ajouter un article en plus  
this.addQuantity = function (quantity) {
    this.quantityArticle += quantity;
}

//Fonction qui donne le résultat du prix total de l'article [i]
this.getPriceNewLineShop = function () {
    let result = this.priceArticle * this.quantityArticle;
    return result;
}