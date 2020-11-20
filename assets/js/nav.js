let phone = document.getElementById('phone');
let office = document.getElementById('office')
let musicSpeaker = document.getElementById('musicSpeaker');
let category = '';
phone.onclick = function () {
    category = 'Phone'
    console.log(category)
}
musicSpeaker.onclick = function () {
    category = 'Enceinte'
    console.log(category)
}
office.onclick = function () {
    category = 'Bureautique'
    console.log(category)
}