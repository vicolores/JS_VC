/*
Escribir un programa que muestre el sumatorio de todos los múltiplos de 3 encontrados 
entre el 0 y el 100
*/
let sumatorio = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    sumatorio += i;
  }
}

document.write("La suma de todos los múltiplos de 3 encontrados entre el 0 y el 100 es: " + sumatorio);