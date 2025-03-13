// Código para executar o meu projeto

// Importar o modulo

import { calcularIMC, tabelaIMC } from "./CalculadoraIMC.js";

console.log(">>>>> Calculadora Imc<<<<<<<");
console.log(tabelaIMC)

const peso = 80;
const altura = 1.70;

const resultado = calcularIMC(peso, altura);

console.log("Resultado do IMC:", resultado.toFixed(2));


// Importar o modulo externo

import moment from "moment";

const hoje = moment();

console.log("Data");
console.log(hoje.format("DD/MM/YYYY"))