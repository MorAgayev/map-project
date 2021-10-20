'use strict'

function onInit() {
    const elBody = document.querySelector('body');
    elBody.style.backgroundColor = loadFromStorage('BG-COLOR');
    elBody.style.color = loadFromStorage('COLOR');
}

function onSubmit(ev) {
    ev.preventDefault();
    const bDate = document.querySelector('#b-date').value;
    const month = +bDate.slice(5,7);
    saveToStorage('USER-DATA',getUserData()); 
    if(month < 4) {
        const str = 'less 4';
        saveToStorage('astrological',str)
    } else if (month > 4 && month < 8 ) {
        const str = 'less 8';
        saveToStorage('astrological',str)
    } else {
        const str = 'more 8';
        saveToStorage('astrological',str)
    }
    window.open('index.html')
}

function getUserData() { 
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const age =  document.querySelector('#age').value;
    const bDay = document.querySelector('#b-date').value;
    const time = document.querySelector('#t-birth').value;
    const bgColor = document.querySelector('#bg-color').value;
    const fColor = document.querySelector('#font-color').value;
    const userData = {
        name: name,
        email:  email,
        age: age,
        bDay:  bDay,
        time:  time,
        bgColor:  bgColor,
        fColor: fColor
    }
    return userData;
}

function onChangeBgColor(color) {  
    document.querySelector('body').style.backgroundColor = color;
    saveToStorage('BG-COLOR', color)
}

function onChangeFontColor(color) {
    document.querySelector('body').style.color = color;
    saveToStorage('COLOR', color)
}