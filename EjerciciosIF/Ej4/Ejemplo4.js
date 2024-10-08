/*
Crea un script que pida al usuario el diámetro de una rueda (en metros) y su grosor y a través
de condicionales if realice las siguientes operaciones:
a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo
grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es
para un vehículo mediano”.
Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el
mensaje “La rueda es para un vehículo pequeño”.
*/
var diametroRueda = prompt("Dime el diametro de la rueda: ");

if (diametroRueda > 1.4) {
    alert("La rueda es para un vehículo grande");

}else if (diametroRueda <= 1.4 && diametroRueda > 0.8) {
    alert("La rueda es para un vehículo mediano")
}else {
    alert("La rueda es para un vehículo pequeño")
}
