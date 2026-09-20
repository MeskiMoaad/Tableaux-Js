const prompt = require('prompt-sync')();
let taille = parseInt(prompt("entrer la taille du tableau"));
let tab = [];

for (let i = 0; i < taille; i++)
{
	tab[i] = Number(prompt(`entrer l'element ${i + 1} :`));
}
let i = 0;
let j = tab.length - 1;
let temp;
while (i < j)
{
	temp = tab[j];
	tab[j] = tab[i];
	tab[i] = temp;
	i++;
	j--;
}
console.log(tab);
