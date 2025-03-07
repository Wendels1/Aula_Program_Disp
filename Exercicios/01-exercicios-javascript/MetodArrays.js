const frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

const maiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log("Maiúsculas:", maiusculas);

const comecamComA = frutas.filter(fruta => fruta.startsWith('A'));
console.log("Começam com 'A':", comecamComA);

const comprimentos = frutas.map(fruta => fruta.length);
console.log("Comprimentos:", comprimentos);