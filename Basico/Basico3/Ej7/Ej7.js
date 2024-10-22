/*
Hacer un programa que permita saber si un año es bisiesto. Para que un año sea bisiesto 
debe ser divisible por 4 y no debe ser divisible por 100, excepto que también sea divisible por 
400
*/
/*
Hacer un programa que permita saber si un año es bisiesto. Para que un año sea bisiesto 
debe ser divisible por 4 y no debe ser divisible por 100, excepto que también sea divisible por 400
*/

function esBisiesto(anio) {
  // Un año es bisiesto si es divisible por 4 y no por 100, o si es divisible por 400
  if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Solicita al usuario que ingrese un año
let anio = parseInt(prompt("Ingrese un año:"), 10);

// Verifica si el año es bisiesto y muestra el resultado
if (esBisiesto(anio)) {
  console.log(`El año ${anio} es bisiesto.`); // Visualizar desde consola de depuración
} else {
  console.log(`El año ${anio} no es bisiesto.`);
}
