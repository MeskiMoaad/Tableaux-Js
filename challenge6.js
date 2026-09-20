const prompt = require("prompt-sync")();

let taille = Number(prompt("entrer le nombre d'elements : "));
let tab = [];

let i = 0;
for (let i = 0; i < taille; i++)
{
	valeur  = Number(prompt(`entrer l'element ${i + 1} :`));
	tab.push(valeur);


}

let facteur = Number(prompt("entrer le facteur : "));

i = 0;
while (i < taille)
{
    tab[i] *= facteur;
    i++;
}

console.log("le resultat est :", tab);
