//8) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números enteros. La computadora debe mostrar cuál fue el mayor número y en qué posición apareció.

let numeros = [],
  cantidadNumeros,
  numeroMayor,
  posicion;

do {
  cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números a cargar"));
  if (cantidadNumeros < 1) {
    alert("TIENE QUE SER MAYOR A 0");
  }
} while (cantidadNumeros < 1);

for (let i = 0; i < cantidadNumeros; i++) {
  numeros[i] = parseInt(prompt(`Ingrese el ${i + 1}° numero entero`));
  if (i==0) {
    numeroMayor = numeros[i];
    posicion = i;
  } else if (numeroMayor < numeros[i]){
    numeroMayor = numeros[i];
    posicion = i;
  }
}
document.write(`El números mayor es ${numeroMayor} <br>y esta en la posición ${posicion}`);
