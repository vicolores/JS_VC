var cincoNumeros = [];
var mayor = 0;
var menor = 10000;

alert("Introduce 5 números");

for (let index = 0; index < 5; index++) {
  cincoNumeros[index] = Number(prompt("Introduce el número " + (index + 1)));

  if (cincoNumeros[index] > mayor) {
    mayor = cincoNumeros[index];
  }

  if (cincoNumeros[index] < menor) {
    menor = cincoNumeros[index];
  }
}

document.write("El número mayor es: " + mayor + "<br>");
document.write("El número menor es: " + menor);

/*
let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(Number(prompt("Introduce un número:")));
}
let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);
document.write("El mayor es: " + mayor + ", el menor es: " + menor);
*/
