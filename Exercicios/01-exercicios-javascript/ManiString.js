const string = "Wendel Ferreira Santos";
const letraAntiga = 'l';
const letraNova = 'z';

console.log("Maiúsculas:", string.toUpperCase());
console.log("Minúsculas:", string.toLowerCase());
console.log("Invertida:", string.split('').reverse().join(''));
console.log("Substituída:", string.replace(new RegExp(letraAntiga, 'g'), letraNova));