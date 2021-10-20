'use strict'

function getPosition() {
    navigator.geolocation.getCurrentPosition(showLocation);

}

function showLocation(position) {
    console.log('position', position);
}