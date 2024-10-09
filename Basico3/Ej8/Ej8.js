/*
Crear un algoritmo que muestre los primeros 10 números de la sucesión de Fibonacci. La 
sucesión comienza con los números 0 y 1 y, a partir de éstos, cada elemento es la suma de los 
dos números anteriores en la secuencia: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
*/

function fibonacci() {
  let num1 = 0;
  let num2 = 1;
  let num3 = 0;
  let i = 0;
  let fibo = [];

  while (i < 10) {
    fibo.push(num1);
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    i++;
  }
  return fibo;
}
console.log(fibonacci());
