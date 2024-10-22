/*
-Escribe un programa que lea en una línea el número de horas trabajadas y en otra línea el
precio por hora.
Calcula el salario neto semanal de un trabajador en función del número de horas trabajadas y 
la tasa de impuestos de acuerdo a las siguientes reglas:
• Las primeras 35 horas se pagan a tarifa normal.
• Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal.
Al sueldo bruto se le aplicarán las siguientes tasas de impuestos:
• Los primeros 500 euros son libres de impuestos.
• Los siguientes 400 tienen un 25% de impuestos.
• Los restantes un 45% de impuestos.
Imprime por la salida estándar el salario calculado
*/
// Función para calcular el salario neto semanal
function calcularSalario(horasTrabajadas, tarifaHora) {
  // Cálculo de salario bruto
  let salarioBruto;
  if (horasTrabajadas <= 35) {
    salarioBruto = horasTrabajadas * tarifaHora;
  } else {
    salarioBruto = (35 * tarifaHora) + ((horasTrabajadas - 35) * tarifaHora * 1.5);
  }

  // Aplicación de impuestos
  let salarioNeto;
  if (salarioBruto <= 500) {
    salarioNeto = salarioBruto;
  } else if (salarioBruto <= 900) {
    salarioNeto = 500 + (salarioBruto - 500) * 0.75;
  } else {
    salarioNeto = 500 + (400 * 0.75) + ((salarioBruto - 900) * 0.55);
  }

  return salarioNeto;
}

// Leer las horas trabajadas y la tarifa por hora del usuario
let horasTrabajadas = parseFloat(prompt("Introduce el número de horas trabajadas: "));
let tarifaHora = parseFloat(prompt("Introduce el precio por hora: "));

// Calcular el salario neto
let salarioNeto = calcularSalario(horasTrabajadas, tarifaHora);

// Imprimir el resultado
document.write("El salario neto semanal es: " + salarioNeto.toFixed(2) + " euros");