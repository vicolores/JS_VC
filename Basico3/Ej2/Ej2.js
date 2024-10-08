/*
Desarrollar un programa que muestre la tabla de multiplicar del numero X, hasta el valor Y.
Ambos los leerá de la entrada estándar y estarán en una sola línea. 
La tabla la mostrará con una entrada por línea. Entre cada elemento habrá un único espacio de
separación.
Ejemplos de resultados
x=2 y=7
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
x=44 y=2
44 x 1 = 44
44 x 2 = 88
x=-3 y=1 
-3 x 1 = -3
*/
let numeroX = parseInt(prompt("Ingrese un numero entero: "));
let numeroY = parseInt(prompt("Ingrese un numero entero: "));

for (let i = 1; i <= numeroY; i++) {
  document.write(numeroX + " x " + i + " = " + (numeroX * i) + "<br>");
  
}
