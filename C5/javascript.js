var hobby = ["mersul in drumetii","calatoritul","sa ma joc board games cu prietenii","muzica","cititul","uitatul la filme","inotul",];
var firstName = "Bruno"
var lastName; 
var age; 
var phoneNumber; 
var gender; 
var email;
for(i=0;i<hobby.length;i++) {
    console.log (`Unul din hobby-urile mele este ${hobby[i]}`)
};
var stefan = {
    firstName:"Stefan",
    lastName:"Salavastru",
    age:25,
    phoneNumber:"0743581672",
    gender:"masculin",
    email:"st.salavastru@gmail.com",
    hobby,
};
function thisIsMe (stefan) {
    console.log (`Numele meu este ${stefan.firstName} ${stefan.lastName}, genul meu este ${stefan.gender}, am ${stefan.age} de ani, numarul meu de telefon este ${stefan.phoneNumber}, adresa mea de mail este ${stefan.email}, iar printre hobby-urile mele se numara ${hobby[0]},${hobby[1]},${hobby[2]}`)
}
thisIsMe(stefan);