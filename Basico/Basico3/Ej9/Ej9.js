/*
Escribir un programa que permita al usuario ingresar 6 números enteros, que pueden ser 
positivos o negativos. Al finalizar, mostrar el sumatorio de los números negativos y el 
promedio de los positivos.
No olvides que no es posible dividir por cero, por lo que es necesario evitar que el programa 
arroje un error si no se ingresaron números positivos.

*/
let numeros = [];
let sumaNegativos = 0;
let sumaPositivos = 0;
let contadorPositivos = 0;

// Ingresar 6 números enteros
for (let i = 0; i < 6; i++) {
  let numero = parseInt(prompt("Ingrese un número entero: "));
  numeros.push(numero);
}

// Procesar los números
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0) {
    sumaNegativos += numeros[i];
  } else if (numeros[i] > 0) {
    sumaPositivos += numeros[i];
    contadorPositivos++;
  }
}

// Mostrar resultados
if (contadorPositivos > 0) {
  let promedioPositivos = sumaPositivos / contadorPositivos;
  console.log(
    `El promedio de los números positivos es: ${promedioPositivos.toFixed(2)}`
  );
} else {
  console.log("No se ingresaron números positivos.");
}

console.log(`La suma de los números negativos es: ${sumaNegativos}`);
