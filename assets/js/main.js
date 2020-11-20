let i = 0;
let original = document.querySelector('#card-product');


function clone() {
    let clone = original.cloneNode(true); //"deep" clone
    clone.id = 'card-product' + i;
    document.querySelector('.img-card').src = img
    document.querySelector('.title-card').innerHTML = name
    document.querySelector('.description-card').innerHTML = description
    document.querySelector('.price-card').innerHTML = price
    original.parentNode.appendChild(clone);

    i++;
}
function globalArray(element) {
    clone(element)
}
let arrayButton = document.querySelector('.Phone');
arrayButton.onclick = function (e) {
    e.preventDefault();
    // document.getElementById('cloneParent').innerHTML = '';
    arrayUsers.forEach(globalArray)