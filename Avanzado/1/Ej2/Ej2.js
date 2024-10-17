/*
EJERCICIO 2
Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre por pantalla el número de veces que aparece la letra en la frase.
*/

// Pedir la frase y la letra al usuario
let frase = prompt("Introduce una frase:");
let letra = prompt("Introduce una letra:");

// Convertir la frase a un array de caracteres
let fraseArray = frase.split('');

// Inicializar contador
let contador = 0;

// Recorrer el array y contar las ocurrencias de la letra
for (let i = 0; i < fraseArray.length; i++) {
  // Hacer la comparación insensible a mayúsculas/minúsculas
  if (fraseArray[i].toLowerCase() === letra.toLowerCase()) {
    contador++;
  }
}

// Mostrar el resultado al usuario
document.write("La letra '" + letra + "' aparece " + contador + " veces en la frase \"" + frase + "\".");
