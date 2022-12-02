

let appState = true;
const circles = document.querySelectorAll('.circle')
let activeLight = 0;

setInterval(() => {
	changeLight();
}, 2000);

function changeLight() {

	if(appState){


	circles[activeLight].className = 'circle';
	activeLight++;
	if(activeLight > 2) {
		activeLight = 0;
	}

	const currentLight = circles[activeLight]
	currentLight.classList.add(currentLight.getAttribute('id'));
	}
	else{



		circles[0].className = "circle";
		circles[2].className = "circle";

		if(circles[1].className == "circle"){
			circles[1].classList.add(circles[1].id);
		}else{
			circles[1].className = "circle"
		}
	}
}

function changeState(isDay){
	appState = isDay;
}
