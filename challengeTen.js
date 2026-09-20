const prompt = require('prompt-sync')();
let taille = parseInt(prompt("entrer la taille du tableau"));
let tab = [];

for (let i = 0; i < taille; i++)
{
	tab[i] = Number(prompt(`entrer l'element ${i + 1} :`));
}
let search = Number(prompt("entrer l'element a rechercher :"));
let i = 0;
while (i < taille)
{
	if (tab[i] === search)
		break;
	i++;
}
if (i < taille)
	console.log("present");
else
	console.log("non present");




