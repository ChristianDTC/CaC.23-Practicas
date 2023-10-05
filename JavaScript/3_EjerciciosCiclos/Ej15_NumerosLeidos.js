//15) Realizá un programa que permita al usuario ingresar números mientras el promedio entre todos los ingresados sea menor a 20. La computadora debe indicar la cantidad de valores leídos.

let numeroIngresado,
  promedio = 0,
  acumulador = 0,
  cantidad = 0;

do {
  cantidad++;
  numeroIngresado = parseFloat(prompt("Ingrese un número"));
  acumulador += numeroIngresado;
  promedio = acumulador / cantidad;
} while (promedio < 20);

document.write(`La cantidad de valores leídos fueron ${cantidad}`);
