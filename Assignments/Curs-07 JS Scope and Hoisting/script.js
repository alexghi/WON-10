//GCD and LCM
function calc(e) {
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var display;
    if(e=="GCD"){
        for(let i=1; i<=num1 && i<=num2;i++){
            if(num1%i==0 &&num2%i==0){
                display=`The GCD of ${num1} and ${num2} is ${i}`
            }
        }
     } else if(e=="LCM"){
            let max=num1>num2?num1:num2
            while(true){
                if(max%num1==0&&max%num2==0){
                    display=`The LCM of ${num1} and ${num2} is ${max}`
                    break;
                }
                max++;
            }
           
        }
        document.getElementById("display").innerHTML=display;
    }

// Traffic Lights

const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");

function changeLights(){
    setTimeout(() => {
        redLight()
    },0);
    setTimeout(() => {
        yellowLight()
    },3000);
    setTimeout(() => {
        greenLight()
    },6000);
    setTimeout(() => {
        yellowLight()
    },9000);
    setTimeout(() => {
        redLight()
    },12000);
}
function redLight() {
    red.classList.add("active")
    setTimeout(() => {
        red.classList.remove('active')
    },3000);
}
function yellowLight() {
    yellow.classList.add('active')
    setTimeout(() => {
        yellow.classList.remove('active')
    },3000);
}
function greenLight() {
    green.classList.add('active')
    setTimeout(() => {
        green.classList.remove('active')
    },3000);
}
function yellowLight() {
    yellow.classList.add('active')
    setTimeout(() => {
        yellow.classList.remove('active')
    },3000);
}
function redLight() {
    red.classList.add("active")
    setTimeout(() => {
        red.classList.remove('active')
    },3000);
    setInterval(changeLights,12000);
    
}

function interYellow() {
    setTimeout(() => {
        yellowLight()
    },0);
    function yellowLight() {
        yellow.classList.add('active')
        setTimeout(() => {
            yellow.classList.remove('active')
        },200);
    }
    setInterval(interYellow,1000);
    
}
