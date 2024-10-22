var cadena = "";
var cadenaArray = [];
var cadenaArrayInvertida = [];
var longitudCadena = 0;
var mayusculas = "";

// Solicitamos al usuario que introduzca una cadena
cadena = prompt("Introduce una cadena: ");

// Convertimos la cadena en un array de caracteres
cadenaArray = cadena.split("");

// Obtenemos la longitud de la cadena (sin paréntesis, porque es una propiedad)
longitudCadena = cadenaArray.length;

// Mostramos la longitud de la cadena
document.write("Longitud de la cadena: " + longitudCadena + "</br>");

// Recorremos el array y mostramos los caracteres en mayúsculas
for (let i = 0; i < cadenaArray.length; i++) {
  document.write(cadenaArray[i].toUpperCase());
}

document.write("</br>");

// Recorremos el array y mostramos los caracteres en minúsculas
for (let i = 0; i < cadenaArray.length; i++) {
  document.write(cadenaArray[i].toLowerCase());
}

document.write("</br>");

// Mostramos cada letra separada por un espacio
for (let i = 0; i < cadenaArray.length; i++) {
  document.write(cadenaArray[i] + " ");
}

document.write("</br>");

// Invertimos el array y mostramos el resultado
//reverse() y join(""): reverse() invierte el array,
//y join("") convierte el array de nuevo en una cadena de caracteres para mostrarlo correctamente.
document.write("Cadena invertida: " + cadenaArray.reverse().join("") + "</br>");
