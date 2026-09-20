const prompt = require('prompt-sync')();
let taille = parseInt(prompt("entrer la taille du tableau :"));
let tableau = [];
for (let i = 0; i < taille; i++)
{
    let valeur = parseInt(prompt(`entrer la °${i + 1} :`));
    tableau.push(valeur);
}
let max = tableau[0];
let i = 0;
while (i < tableau.length)
{
    if (tableau[i] > max)
        max = tableau[i];
    i++;
}
console.log(max);