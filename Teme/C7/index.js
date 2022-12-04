//cmmdc

function cmmdc () {
     a = document.getElementById("firstNumber").value;
     b = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = "c.m.m.d.c al numerelor" +" " + a + " " + "si" + " " + b + " " + " " + "este" + " " + greatestCommonDivisor(a, b);
}

function greatestCommonDivisor (a, b) {
    if (b) {
        return greatestCommonDivisor (b, a % b);
    } else {
        return Math.abs (a);
    }
    }



//cmmmc


function cmmmd() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML =
      "c.m.m.m.c. al numerelor " +
      num1 +
      " și " +
      num2 +
      " este " +
      leastCommonMultiple(num1, num2);
  
    function leastCommonMultiple(num1, num2) {
      let min = num1 > num2 ? num1 : num2;
  
      while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
          return min;
        }
        min++;
      }
    }
  }

  