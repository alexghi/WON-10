let num = [2, 3, 5, 6, 9, 12, 16, 17, 24, 45,54 ,67, 76, 75, 87, 95, 135, 165, 174, 179, 199, 354, 656 , 769];

let result = [];
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Scrieți o funcție JavaScript care sa determine și să returneze numarul de vocale dintr-un sir de caractere dat"));

function verificaNume() {
  let nume = document.querySelector("#nume");
  if (nume.value.lenght < 3) {
    alert("Numele trebuie sa aiba cel putin 3 caractere");
    nume.classList.add("error");
    nume.focus();
    return false;
  } else {
    nume.classList.remove("error");
    return true;
  }
}

function verificaParola() {
  let pass = document.querySelector("#pass");
  if (!pass.value.match(/\d/)) {
    alert ("Parola trebuie sa contina cel putin o cifra");
    pass.classList.add("#error");
    pass.focus();
    return false;
  } else {
    pass.classList.remove("error");
    return true;
  }
}

function verificaVarsta() {
  let varsta = document.querySelector("#varsta");
  if (varsta.value < 16) {
    alert("Varsta trebuie sa fie minim 16!");
    varsta.classList.add("error");
    varsta.focus();
    return false;
  } else {
    varsta.classList.remove("error");
    return true;
  }
}

function verificaEmail() {
  let email = document.querySelector("#email");
  if (!email.value.endWith(".ro")) {
  alert("Doar domeniu email.ro");
  email.classList.add("error");
  email.focus();
  return false;
} else {
  email.classList.remove("error");
}
}

function validare() {
  if (
    verificaNume()  
    && verificaParola() 
    && verificaVarsta() 
    && verificaEmail() 
  )
    return true;
  else return false;
}