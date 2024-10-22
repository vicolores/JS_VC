// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

let frase = prompt("Introduce una frase");
let vocales = []; // Array para almacenar las vocales encontradas
let contador = []; // Contador de vocales

// Recorremos cada carácter de la frase
for (let i = 0; i < frase.length; i++) {
  // Verificamos si el carácter actual es una vocal (tanto mayúscula como minúscula)
  if ("aeiou".includes(frase[i].toLowerCase())) {
    switch(frase[i].toLowerCase()) {
      case "a":
        contador++;
        break;
      case "e":
        contador++;
        break;
      case "i":
        contador++;
        break;
      case "o":
        contador++;
        break;
      case "u":
        contador++;
        break;
    }
    vocales.push(frase[i]); // Agregamos la vocal encontrada al array
  }
}

// Mostramos el resultado
document.write(`Las vocales que aparecen son: ${vocales.join(", ")}. <br>`);
document.write(`Número total de vocales: ${contador}.`);