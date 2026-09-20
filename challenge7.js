const prompt = require('prompt-sync')();
let taille = Number(prompt("entrer la taille du tableau :"));
let tab = [];

for (let i = 0; i < taille; i++)
{
	let valeur = Number(prompt(`entrer l'element ${i + 1} :`));
	tab.push(valeur);
}
let temp;
let size = tab.length;
while ( size > 0)
{
	let i = 0;
	while ( i < size - 1)
	{
		if (tab[i] > tab[i + 1])
		{
			temp = tab[i + 1];
			tab[i + 1] = tab[i];
			tab[i] = temp;
		}
		i++;
	}
	size--;
}
console.log(tab);
