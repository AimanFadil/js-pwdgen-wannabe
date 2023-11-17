let name = prompt (`Qual e il tuo nome?`);

let surname = prompt (`Qual e il tuo cognome?`);

let color = prompt (`Qual e il tuo colore preferito?`);

let benvenuto = `${name}${surname}${color}23`;

document.getElementById(`subtitle`).innerHTML = benvenuto;
console.log(benvenuto)

