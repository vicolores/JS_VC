/*
 Escribir un programa que nos diga si un número dado es primo (no es
divisible por ningún otro número que no sea él mismo o la unidad)
*/
let numero = Number(prompt("Introduce un número"));
let primo = true;

if (numero <= 1 || numero === 2) {
  primo = false; // Los números menores o iguales a 1 no son primos
} else {
  // i se inicia en 2 porque 1 no afecta la condición de primalidad
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) { // Si tiene algún divisor distinto de sí mismo y 1
      primo = false;
      break; // Rompe el bucle si encuentra un divisor
    } else if (numero === 2) {
      primo = true;
      break;
    }
  }
}

if (primo) {
  document.write("El número " + numero + " es primo."); // Mensaje corregido
} else {
  document.write("El número " + numero + " no es primo."); // Mensaje corregido
}

