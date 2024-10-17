/*
EJERCICIO 1
Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.
utilizando el while. La primera vez que introduces la contraseña utilizaremos el metodo
confirm(), para decir que estamos de acuerdo con la contraseña, en caso contrario, nos
pedirá la nueva contraseña.
****************************************************************
confirm(): El confirm()método muestra un cuadro de diálogo con un mensaje, un botón Aceptar y un botón Cancelar. El confirm()método retorna true si el usuario hizo clic en "Aceptar", en caso contrario false.
*/
let contrasena = "";
let contrasenaUsuario = "";
let siNo = false;


do {
  contrasena = prompt("Introduce la contraseña");
  siNo = confirm("¿Estás de acuerdo con la contraseña?");
} while (siNo === false);

do {
  contrasenaUsuario = prompt("Introduce la contraseña a comprobar");
} while (contrasena !== contrasenaUsuario);

alert("Contraseña correcta");
