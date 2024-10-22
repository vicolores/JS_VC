// Programa que pide una frase y cuenta cuántas veces aparece la letra 'a' (mayúscula o minúscula).
let frase = prompt("Introduce una frase");
let contadorDeA = 0; // Se utiliza camelCase para nombrar variables, es una convención en JavaScript.

// Recorre cada carácter de la frase
for (let i = 0; i < frase.length; i++) {
  // Convierte el carácter actual a minúsculas y verifica si es 'a'
  if (frase[i].toLowerCase() === "a") {
    contadorDeA++; // Incrementa el contador si el carácter es 'a'
  }
}

// Muestra el resultado en el documento
document.write(`La letra 'a' aparece ${contadorDeA} veces.`); // Uso de template literals para mejor legibilidad.
