import { soma, subtracao, multiplicacao, divisao } from "./calculadora.js";

console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));

// Parte 2 da Atividade

import moment from 'moment';
function calcularIdade(anoNascimento) {
    const anoAtual = moment(). year();
    const idade = anoAtual - anoNascimento;
    return idade;
}
const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(idade);