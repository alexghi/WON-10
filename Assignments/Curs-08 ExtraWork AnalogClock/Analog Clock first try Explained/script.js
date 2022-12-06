// First we set the interval at which the function is called
setInterval(setClock,1000);
// Then we declare const for every hand
const dataHour = document.querySelector(`[data-hour-hand]`);
const dataMinute = document.querySelector(`[data-minute-hand]`);
const dataSecond = document.querySelector(`[data-second-hand]`);

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60 ;
    const minutesRatio = currentDate.getMinutes() /60 ;
    const hourRatio = currentDate.getHours() / 12 ;
    setRotation(dataHour,hourRatio);
    setRotation(dataMinute, minutesRatio);
    setRotation(dataSecond , secondsRatio);
    // We declare a const as a new Date() constructor so that we can get the internal date from the computer, then use the get function for the data we need from this object to declare constants for the ratio of movement for each hand . This function sets the ratio of movement for each hand and then calls the rotation function for every of the hands.
}

function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
    // The function creates the rotation in the clock. The parameter element's style property variable rotation is modified to the ratio declared in the setclock function .
}

setClock();
// We call the function when we load the page so that the clock doesnt start from default position 