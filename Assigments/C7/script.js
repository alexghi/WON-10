function gcd(a, b) {
    var R;
    while ((a % b) > 0)  {
        R = a % b;
        a = b;
        b = R;
    }
    return b;
    }

    function getInputValue1(){
        var r1 = document.getElementById("r1").value;
        var r2 = document.getElementById("r2").value;
        document.getElementById("result1").innerHTML = "c.m.m.d.c. al numerelor " + r1 + " și " + r2 + " este " + gcd(r1, r2);
    }

    
    function lcm(a, b) 
    {
	return a * (b / gcd(a,b));
    }

    function getInputValue2(){
        var r1 = document.getElementById("r1").value;
        var r2 = document.getElementById("r2").value;
        document.getElementById("result2").innerHTML = "c.m.m.m.c. al numerelor " + r1 + " și " + r2 + " este " + lcm(r1, r2);
    }

// trafic light

    function startTrafficSignal () {
        var green = document.getElementById("green");
        var red = document.getElementById("red");
        var yellow = document.getElementById("yellow");
        
        green.style.opacity=1;
        setTimeout(function () {
            green.style.opacity=.3;
            red.style.opacity=.3;
            yellow.style.opacity=1;
        },5000);
     
        setTimeout(function () {
            green.style.opacity=.3;
            red.style.opacity=1;
            yellow.style.opacity=.3;
        },7000);
     
        setTimeout(function () {
            green.style.opacity=.3;
            red.style.opacity=.3;
            yellow.style.opacity=1;
        },12000);

        setTimeout(function () {
            green.style.opacity=1;
            red.style.opacity=.3;
            yellow.style.opacity=.3;
        },17000);

        var timer=setInterval(function () {
            startTrafficSignal();
        },17000); 
    }
     
        
    function startTrafficSignalYellow () {
        var green = document.getElementById("green");
        var red = document.getElementById("red");
        var yellow = document.getElementById("yellow");

        setTimeout(function () {
            green.style.opacity=.3;
            red.style.opacity=.3;
            yellow.style.opacity=1;
        },1000);

        setTimeout(function () {
            green.style.opacity=.3;
            red.style.opacity=.3;
            yellow.style.opacity=.3;
        },2000);

        var timer=setInterval(function () {
            startTrafficSignalYellow();
        },3000);
    }