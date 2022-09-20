/**
 * @author Tobias Glauser
 * @since 2022.09.06
 */

'use strict';

console.log('Test liaison JS');

const formulaire = document.querySelector('form');
const listBackground = document.getElementById('background');

// animation du bouton
const btCreer = document.querySelector('[type="submit"]')
btCreer.addEventListener('animationend', function (){
    alert("Envoyé !");
    formulaire.reset();
    btCreer.classList.remove('animate__heartBeat')
});


// A l'envoie du formulaire
formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // annule le comportement par défaut

    // Animation du bouton
    btCreer.classList.add('animate__heartBeat');
});

// Au changement de la valeur de la liste
listBackground.addEventListener('change', function () {
    const image = `./img/backgrounds/${listBackground.value}`
    document.body.style.backgroundImage = `url(${image})`
});