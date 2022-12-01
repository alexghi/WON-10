const circles = document.querySelectorAll('.circle');
let activelight = 0;
setInterval(changelight, 2000);

function changelight(){

        circles[activelight].className = "circle";
        activelight++;
        
        if(activelight > 2){
            activelight = 0;
        }

        const currentcolor = circles[activelight];
        currentcolor.classList.add(currentcolor.getAttribute('color'));
    }

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background= 'white';
        body.style.color = 'black';
        body.style.transition = '1.5s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1.5s';
    }
});

