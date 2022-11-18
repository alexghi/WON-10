var hobbies = [`cititul`, `alergatul`, `dansul`, `desenatul`];
for (let afiseaza of hobbies) {
    console.log(`Unul din hobby-urile mele este: ${afiseaza}`);
};







var DatePersonale = {
    Nume: `Drilea`,
    Prenume: `Cosmin`,
    Varsta: 24,
    NumarTelefon: `4371-275`,
    Gen: `Masculin`,
    hobbies : [`cititul`, `alergatul`, `dansul`, `desenatul`],
};





function CallMe (DatePersonale) {
    console.log (`${DatePersonale.Prenume} ${DatePersonale.Varsta} Printre hobby-urile mele se afla: ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}`);
}
CallMe(DatePersonale);



