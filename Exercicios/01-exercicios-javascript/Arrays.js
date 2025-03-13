const numeros = [10, 20, 30, 40, 50];

numeros.push(60);
console.log("Após adicionar 60:", numeros);

numeros.shift();
console.log("Após remover o primeiro:", numeros);

const maior = Math.max(...numeros);
const menor = Math.min(...numeros);

console.log("Maior:", maior);
console.log("Menor:", menor);