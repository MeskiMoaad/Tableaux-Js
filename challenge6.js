const prompt = require("prompt-sync")();

let n = Number(prompt("Entrez le nombre d'elements : "));
let tab = [];

for (let i = 0; i < n; i++) {
    tab[i] = Number(prompt(`Entrez l'element ${i + 1} : `));
}

let facteur = Number(prompt("Entrez le facteur : "));

for (let i = 0; i < n; i++) {
    tab[i] = tab[i] * facteur;
}

console.log("le resultat est  :", tab);
