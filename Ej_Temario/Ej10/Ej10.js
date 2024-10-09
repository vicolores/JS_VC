/*
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo complejo: "La ruta nos aporto otro paso natural"
*/
function esPalindromo(cadena) {
  // Convertir todo a minúsculas y eliminar espacios
  let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Revertir la cadena limpia
  let cadenaRevertida = cadenaLimpia.split("").reverse().join("");

  // Verificar si la cadena original limpia es igual a la revertida
  return cadenaLimpia === cadenaRevertida;
}

let cadena = prompt("Introduce una cadena:");

if (esPalindromo(cadena)) {
  console.log("Es palíndromo");
} else {
  console.log("No es palíndromo");
}
