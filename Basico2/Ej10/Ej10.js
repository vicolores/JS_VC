// Programa que pide una frase y cuenta cuántas vocales contiene
let frase = prompt("Introduce una frase");
let vocales = []; // Array para almacenar las vocales encontradas
let contador = 0; // Contador de vocales

// Recorremos cada carácter de la frase
for (let i = 0; i < frase.length; i++) {
  // Verificamos si el carácter actual es una vocal (tanto mayúscula como minúscula)
  if ("aeiou".includes(frase[i].toLowerCase())) {
    vocales.push(frase[i]); // Agregamos la vocal encontrada al array
    contador++; // Incrementamos el contador de vocales
  }
}

// Mostramos el resultado
document.write(`Las vocales que aparecen son: ${vocales.join(", ")}. <br>`);
document.write(`Número total de vocales: ${contador}.`);
