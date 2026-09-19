const prompt = require('prompt-sync')();
let taille = parseInt(prompt("Combien d'elements voulez vous dans le tableau ?"));
let tableau = [];
for (let i = 0; i < taille; i++)
{
    let valeur = prompt(`entrez l'element n° ${i + 1} :`);
    tableau.push(valeur);
}
console.log("Voici votre tableau :");
console.log(tableau);