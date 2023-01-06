// PROBLEMA NR. 1 - Nr. PRIME

function nrPrim(nr) {
  // dacă nr = prim return true, altfel return false
  // CAZURI SPECIALE
  if (nr < 2) return false;
  if (nr == 2) return true;
  if (nr % 2 == 0) return false;
  // dacă nr. nu este întreg - return false
  const limit = Math.ceil(Math.sqrt(nr));
  for (let i = 3; i <= limit; i += 2) {
    if (nr % i == 0) return false;
  }
  return true;
}

let numere = [3, 4, 6, 22, 33, 101, 17, 79, 40];

for (let nr of numere) {
  if (nrPrim(nr)) {
    console.log(`Numărul ${nr} este număr PRIM!`);
  } else console.log(`Numărul ${nr} este număr COMPUS!`);
}

// PROBLEMA NR. 2 - VOCALE

// includes()
// switch()
// charAt()

const sirDeCaractere = "Acesta ESTE un șir de caractere ăâî";

function vocale(sir) {
  const nr = sir.match(/[aeiouăâî]/gi); // expresii regulate - i = caseInsensitive, g = global
  if (nr) return nr.length; // returnează numărul de vocale
}

console.log(
  "Șirul " + sirDeCaractere + " are " + vocale(sirDeCaractere) + " vocale"
);

// PROBLEMA NR. 3 - VALIDAREA FORMULARULUI

function verificaNume() {
  let nume = document.querySelector("#nume");
  if (nume.value.length < 3) {
    alert("Numele să aibă cel puțin 3 caractere!");
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
    alert("Parola să conțină cel puțin o cifră!");
    pass.classList.add("error");
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
    alert("Vârsta să fie minim 16!");
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
  if (!email.value.endsWith(".ro")) {
    alert("Doar email .ro !!!");
    email.classList.add("error");
    email.focus();
    return false;
  } else {
    email.classList.remove("error");
    return true;
  }
}

function validare() {
  if (
    verificaNume() && // nume OK
    verificaParola() && // parola OK
    verificaVarsta() && // varsta OK
    verificaEmail() // email OK
  )
    return true;
  else return false;
}
