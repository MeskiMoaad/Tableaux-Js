const prompt = require('prompt-sync')();
let taille = parseInt(prompt("entrer la taille du tableau"));
let tableau = [];
let result = 0;
for (let i = 0; i < taille; i++)
{
    let valeur = parseInt(prompt(`entrer la °${i + 1} valeur :`));
    tableau.push(valeur);
}
let i = 0;
while (i < tableau.length)
{
    result += tableau[i];
    i++;
}
console.log("le resultat est :", result);