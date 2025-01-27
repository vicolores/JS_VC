# Ejercicio 18: Mejorar el calendario creado

Añade las opciones necesarias para que el calendario muestre el siguiente aspecto:

## 1. Ocultar el número de la semana en el calendario
- **Pista:** Utilizar la opción `weekNumbers: false`.

## 2. Modificar el formato en el que se muestra la fecha seleccionada
- El formato original es `21/08/2007` (indicado como `%d/%m/%Y`).
- El formato deseado es `Martes, 21 de Agosto de 2007`.
- **Pistas:** Usar los parámetros `%A` (día de la semana) y `%B` (nombre del mes).

## 3. Almacenar la fecha en dos formatos diferentes
- El nuevo formato de fecha es más amigable para los usuarios, pero menos conveniente para su procesamiento.
- El calendario debe permitir almacenar la fecha en un campo oculto de formulario en el formato original (`%d/%m/%Y`) mientras muestra el formato largo (`Martes, 21 de Agosto de 2007`) en pantalla.
- **Pistas:** Usar las opciones `displayArea` para la visualización y `daFormat` para el formato almacenado.