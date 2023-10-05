//16) Realizá un programa que permita al usuario ingresar números enteros. Por cada carga debe preguntar si se desea seguir ingresando, de la forma "¿Deseás ingresar otro número? [S/N]". La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el porcentaje de números pares ingresados.

let validarOpcion,
  numeroIngresado,
  porcentaje,
  cantidadPar = 0,
  cantidadTotal = 0;

do {
  numeroIngresado = parseInt(prompt("Ingrese un número entero"));
  if (numeroIngresado % 2 == 0) {
    cantidadPar++;
  }
  cantidadTotal++;
  do {
    validarOpcion = prompt("¿Deseás ingresar otro número? [S/N]").toUpperCase();
    if (validarOpcion != "S" && validarOpcion != "N") {
      alert("OPCION INVALIDA");
    }
  } while (validarOpcion != "S" && validarOpcion != "N");
} while (validarOpcion != "N");
porcentaje = (cantidadPar * 100) / cantidadTotal
document.write(`El porcentaje de números pares ingresados es ${porcentaje}%`)