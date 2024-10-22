//Escribir un programa que escriba en pantalla los divisores de un número dado por el usuario.
let numero = parseInt(prompt("Ingrese un número: "));
let divisores = [];

document.write("El número introducido es: " + numero + " y sus divisores son: " + "<br>");
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores.push(i);
    document.write(i + "<br>");
  }
}
// Las `` permiten escribir código dentro de una cadena de texto, con ${}
// divisiores.join(", ") es una función que une los elementos del array en una cadena de texto separados por comas y document.write lo imprime como una cadena
document.write(`Los divisores de ${numero} son: ${divisores.join(", ")}`);

