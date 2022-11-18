// Definiti un array cu hobby-urile voastre

var hobbies = ["football", "cars", "movies"]

// Parcurgeti acest array si afisati in consola mesajul:

for (let i of hobbies) {
    console.log('Unul din hobby-urile mele este '+ i);
}

// Definiti un obiect care sa aiba toate datele voastre personale:

var myData = {
    nume: "Cojocaru",
    prenume: "Stefan",
    varsta: 23,
    numar_telefon: 0744237476,
    gen: "masculin",
    hobbies
}   

// Definiti o functie pe care atunci cand o veti apela va afisa:

function presentation(_myData) {
    return `Numele meu este ${myData.nume} ${myData.prenume}, am ${myData.varsta} si printre hobby-urile mele se afla: ${myData.hobbies[0]}, ${myData.hobbies[1]} ,${myData.hobbies[2]}`;
}
