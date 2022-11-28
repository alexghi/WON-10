let person = {
  prenume: "Ingrid",
  nume: "Faber",
  adresa: "Oradea",
  info: function () {
    return this.prenume + " " + this.nume;
  },
};

person.adresa = "New York";
console.log(person.info());

const h2 = document.querySelectorAll("h2");

for (const elem of h2) {
  elem.addEventListener("click", toggleArticle); // mouseover, mouseenter, submit
}

// h2.forEach(
//     function(elem){
//         elem.addEventListener('click', toggleArticle);
//     }
// );

h2.forEach((elem) => elem.addEventListener("click", toggleArticle));

function toggleArticle() {
  // const par = document.querySelector('p');
  const par = this.nextElementSibling; // elementul imediat următor - p
  par.classList.toggle("hidden"); // toggle = add/remove
}

// setTimeout / setInterval

let timeout = setTimeout(numeFunctie, 5000); // 5 secunde
clearTimeout(timeout);

// let interval = setInterval(numeFunctie, 5000);
// clearInterval(interval);

function numeFunctie() {
  alert("Acest mesaj apare după 5 secunde!");
}
