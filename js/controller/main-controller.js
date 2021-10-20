'use strict'

function onInit() {
    const elBody = document.querySelector('body');
    elBody.style.backgroundColor = loadFromStorage('BG-COLOR');
    elBody.style.color = loadFromStorage('COLOR');
    const elastrological = document.querySelector('.astrological');
    elastrological.querySelector('p').innerText = loadFromStorage('astrological')
}
