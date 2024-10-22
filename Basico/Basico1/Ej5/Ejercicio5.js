const iva = 1.21;
var precioArticulo = 0;
var precioTotal = 0;


precioArticulo = Number(prompt("Introduce el precio de un artículo : "));
precioTotal = precioArticulo * iva;

alert ("El precio total es " + precioTotal.toFixed(2));