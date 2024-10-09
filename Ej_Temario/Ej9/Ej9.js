/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
function infoCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    console.log("La cadena está formada sólo por mayúsculas");
  } else if (cadena === cadena.toLowerCase()) {
    console.log("La cadena está formada sólo por minúsculas");
  } else {
    console.log(
      "La cadena está formada por una mezcla de mayúsculas y minúsculas"
    );
  }
}
let cadena;
cadena = prompt("Introduce una cadena de texto");
infoCadena(cadena);
