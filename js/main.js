/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

console.log('Test liaison JS');

const formulaire = document.querySelector('form');
const listBackground = document.getElementById('background');

// A l'envoie du formulaire
formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // annule le comportement par défaut

    alert("Envoyé !");
});

// Au changement de la valeur de la liste
listBackground.addEventListener('change', function () {
    const image = `./img/backgrounds/${listBackground.value}`
    document.body.style.backgroundImage = `url(${image})`
});