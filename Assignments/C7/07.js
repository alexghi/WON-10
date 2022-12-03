function cmmdc() {
    var x = document.getElementById("value1").value;
    var y = document.getElementById("value2").value;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
function cmmmc() {
    var x = document.getElementById("value1").value;
    var y = document.getElementById("value2").value;
    x = Math.abs(x);
    y = Math.abs(y);
    if ((typeof x !== 'number') || (typeof y !== 'number'))
     return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / cmmdc(x, y));
}
function makeGreen() {
    document.getElementById("green").style.opacity="1";
    document.getElementById("green").style.background="#00FF40";
}
function stopGreen() {
    document.getElementById("green").style.opacity="0.5";
    document.getElementById("green").style.background="green";
}
function makeYellow() {
    document.getElementById("yellow").style.opacity="1";
    document.getElementById("yellow").style.background="##FFFF00";
}
function stopYellow() {
    document.getElementById("yellow").style.opacity="0.5";
    document.getElementById("yellow").style.background="yellow";
}
function makeRed() {
    document.getElementById("red").style.opacity="1";
    document.getElementById("red").style.background="##FF0800";
}
function stopRed() {
    document.getElementById("red").style.opacity="0.5";
    document.getElementById("red").style.background="red";
}
