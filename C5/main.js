let hobbies = ["gatitul", "filme", "masini"];

let datePersonale = {
  nume: "Casian",
  prenume: "Cristea", 
  varsta: 36, 
  telefon: "0743818818",
  gen: "M",
  hobbyuri: ["gatitul","filme","masini"]
};

function afisare(date){
  let mesaj = "Numele meu este " + date.nume + " " + date.prenume + ", am " + 
      date.varsta + 
      " ani si printre hobby-urile mele se afla: " + date.hobbyuri.join(", ");
  console.log(mesaj);
}

afisare(datePersonale);


hobbies.forEach((item)=>{
  console.log("Unul din hobby-urile mele este: " + item);
})