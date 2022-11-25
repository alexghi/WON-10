const name = document.getElementById ("name");
const password = document.getElementById ("password");
const age = document.getElementById ("age");
const email = document.getElementById ("email");

if (name.length < 3) {
    alert ("Numele trebuie sa aiba cel putin 3 caractere!");
    return false;
}

if (password.length <=1) {
    alert ("Parola trebuie sa contina cel putin o cifra!");
    return false;
}

if (age.length <=16) {
    alert ("Varsta minima este de 16 ani!");
    return false;
}
if (email.includes (".ro")) {
    alert ("Emailul trebuie sa fie pe un domeniu .ro!");
    return false;
}










