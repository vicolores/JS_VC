/*
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo complejo: "La ruta nos aporto otro paso natural"
*/
function esPalindromo(cadena) {
  // Convertir todo a minúsculas y eliminar espacios
  // La expresión /[^a-z0-9]/g es una expresión regular que define el patrón que queremos buscar.
  // / y /: Estos delimitadores indican el inicio y el final de la expresión regular.
  // En este caso, estamos buscando cualquier carácter que no sea una letra minúscula o un dígito.
  // El signo ^ indica que estamos buscando caracteres que no estén en el conjunto de caracteres especificado.(niega el conjunto de caracteres)
  // El signo g indica que la búsqueda debe ser global, es decir, que se debe buscar en toda la cadena de texto, no solo en la primera ocurrencia.
  // En resumen, [^a-z0-9] significa cualquier carácter que no sea una letra minúscula o un número, lo que se reemplaza por una cadena vacía "" en la cadena original.
  let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Revertir la cadena limpia
  // .split("") convierte la cadena en un array de caracteres
  // .reverse() invierte el orden de los elementos del array
  // .join("") une los elementos del array en una sola cadena(lo contrario que .split(""))
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
