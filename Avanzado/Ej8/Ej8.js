/*
Crear una calculadora utilizando funciones para cada una de sus 
acciones(sumar, restar, dividir, multiplicar, calcular cociente,calcular 
porcentaje ) y
utilizando la sentencia SWITCH para organizarlo. Utiliza el metodo confirm () 
para verificar que la opción seleccionada es la correcta.
ejemplo:
  "¿Que operación deseas realizar?"
"1: sumar, 2: restar, 3: dividir, 4: multiplicar".......
*/
// Funciones para cada operación
function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir por cero.";
  }
  return a / b;
}
function multiplicar(a, b) {
  return a * b;
}
function cociente(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir por cero.";
  }
  return Math.floor(a / b); // Cociente entero
}
function porcentaje(a, b) {
  return (a * b) / 100;
}

// Solicitar operación al usuario
let operacion = parseInt(
  prompt(
    "Introduce la operación a realizar:\n1: sumar\n2: restar\n3: dividir\n4: multiplicar\n5: cociente\n6: porcentaje"
  )
);

// Confirmar la operación
let confirmacion = confirm(
  "Has seleccionado la operación: " + operacion + ". ¿Es correcto?"
);
if (!confirmacion) {
  alert("Operación cancelada.");
} else {
  // Solicitar los dos números
  let num1 = parseInt(prompt("Introduce el primer número: "));
  let num2 = parseInt(prompt("Introduce el segundo número: "));

  // Evaluar la operación con switch
  let resultado;
  switch (operacion) {
    case 1:
      resultado = sumar(num1, num2);
      break;
    case 2:
      resultado = restar(num1, num2);
      break;
    case 3:
      resultado = dividir(num1, num2);
      break;
    case 4:
      resultado = multiplicar(num1, num2);
      break;
    case 5:
      resultado = cociente(num1, num2);
      break;
    case 6:
      resultado = porcentaje(num1, num2);
      break;
    default:
      resultado = "Operación no válida.";
  }

  // Mostrar el resultado
  alert("El resultado es: " + resultado);
}
