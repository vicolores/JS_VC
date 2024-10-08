/*
De un operario se obtiene por teclado una línea con su sueldo (sin decimales) y en otra
línea los años de antigüedad.
Se pide un programa que lea los datos de entrada e informe:
a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, triplicar el sueldo.
b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, doblar sueldo.
c) Si el sueldo es mayor o igual a 500 mostrar sin cambios.
Imprime el sueldo resultante.
*/
let sueldo = Number(prompt("Introduce tu sueldo: "));
let antiguedad = Number(prompt("Introduce tus años de antigüedad:"));

let sueldoResultante = 0;
if (sueldo < 500 && antiguedad >= 10) {
  sueldoResultante = sueldo * 3;
} else if (sueldo < 500 && antiguedad < 10) {
  sueldoResultante = sueldo * 2;
} else if (sueldo >= 500) {
  sueldoResultante = sueldo;
}
document.write(`El sueldo resultante es: ${sueldoResultante}`);
