//11) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000 más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el monto a cobrar por el vendedor y mostrarlo.

let ventas = [],
  cantidadVentas,
  sueldoFijo = 14000,
  precio;

function bonificacion(precio, cantidadVentas) {
  return (precio * cantidadVentas) * 0.16;
}

do {
    precio = parseFloat(prompt("Ingrese el precio del artículo"));
    if (precio <= 0) {
      alert("TIENE QUE SER MAYOR A 0");
    }
  } while (precio <= 0);

do {
  cantidadVentas = parseInt(prompt("Ingrese la cantidad de ventas a cargar"));
  if (cantidadVentas < 1) {
    alert("TIENE QUE SER MAYOR A 0");
  }
} while (cantidadVentas < 1);

sueldoTotal = (sueldoFijo + bonificacion(precio, cantidadVentas)).toFixed(2)
document.write(`El monto a cobrar por el vendedor es $${sueldoTotal}`);
