const prompt = require('prompt-sync')();

let taille = parseInt(prompt("entrer la taille du tableau"));
let tab = [];
let tab2 = [];
for (let i = 0; i < taille; i++)
{
	tab[i] = Number(prompt(`entrer l'element ${i + 1} :`));
}
let i = 0;
let j = 0;
while (i < taille)
{
	tab2[j] = tab[i];
	i++;
	j++;
}
console.log("le tableau 1", tab);
console.log("le tableau 2", tab2);

	

