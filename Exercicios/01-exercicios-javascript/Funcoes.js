function calcular(num) {
    return {
        dobro: num * 2,
        triplo: num * 3,
        quadrado: num ** 2
    };
}

const numero = 5;
const resultado = calcular(numero);

console.log("Dobro:", resultado.dobro);
console.log("Triplo:", resultado.triplo);
console.log("Quadrado:", resultado.quadrado);