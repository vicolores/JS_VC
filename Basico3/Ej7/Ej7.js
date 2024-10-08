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
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let anio = parseInt(prompt("Ingrese un año:"));

if (esBisiesto(anio)) {
    console.write(`El año ${anio} es bisiesto.`);
} else {
    console.write(`El año ${anio} no es bisiesto.`);
}
