//6) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las ventas realizadas por cierto vendedor. La computadora debe mostrar el total de las ventas.

let ventas = [], cantidadVentas, totalVentas = 0;

do {
    cantidadVentas = parseInt(prompt("Ingrese la cantidad de ventas a cargar"));
    if (cantidadVentas < 1) {
      alert("TIENE QUE SER MAYOR A 0");
    }
  } while (cantidadVentas < 1);

for (let i = 0; i < cantidadVentas; i++) {
    ventas[i] = parseFloat(prompt(`Ingrese el ${i+1}° monto de la venta`));
    totalVentas += ventas[i]
}

document.write(`El total de las ventas es $${totalVentas.toFixed(2)}`);

