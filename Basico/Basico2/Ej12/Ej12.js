/*
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/

let numero = prompt("Introduce un número");
let divisible2 = 0;
let divisible3 = 0;
let divisible5 = 0;
let divisible7 = 0;

if (numero % 2 == 0) {
  divisible2 = numero;
  document.write("El número " + numero + " es divisible por 2. <br>");
}else if (numero % 3 == 0) {
  divisible3 = numero;
  document.write("El número " + numero + " es divisible por 3. <br>");
}else if (numero % 5 == 0) {
  divisible5 = numero;
  document.write("El número " + numero + " es divisible por 5. <br>");
}else if (numero % 7 == 0) {
  divisible7 = numero;
  document.write("El número " + numero + " es divisible por 7. <br>");
}else {
  document.write("El número " + numero + " no es divisible por 2, 3, 5 o 7. <br>");
}