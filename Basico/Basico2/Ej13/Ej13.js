/*
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
*/

let numero = Number(prompt("Introduce un número"));
let divisible2 = 0;
let divisible3 = 0;
let divisible5 = 0;
let divisible7 = 0;

if (numero % 2 == 0) {
  divisible2 = numero;
  document.write("El número " + numero + " es divisible por 2. <br>");
}
if (numero % 3 == 0) {
  divisible3 = numero;
  document.write("El número " + numero + " es divisible por 3. <br>");
}
if (numero % 5 == 0) {
  divisible5 = numero;
  document.write("El número " + numero + " es divisible por 5. <br>");
}
if (numero % 7 == 0) {
  divisible7 = numero;
  document.write("El número " + numero + " es divisible por 7. <br>");
}
