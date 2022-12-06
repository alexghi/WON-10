setInterval(setClock,1000);
const myHour = document.querySelector(`[data-hour]`);
const myMinute = document.querySelector(`[data-minute]`);
const mySecond = document.querySelector(`[data-second]`);

function setClock() {
    const now = new Date();
    const nowHour = now.getHours() / 12;
    const nowMinute = now.getMinutes() / 60;
    const nowSeconds = now.getSeconds() / 60;
    myRotation(myHour,nowHour);
    myRotation(myMinute,nowMinute);
    myRotation(mySecond,nowSeconds);

}


function myRotation(element,ratio) {
    element.style.setProperty('--rotation',ratio * 360);
}

setClock();