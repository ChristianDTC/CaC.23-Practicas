//13) Realizá un programa que permita al usuario ingresar números hasta que se introduzca un 0. La computadora debe mostrar el número máximo y el número mínimo.

let validarOpcion,
  maximo,
  minimo,
  control = true;

do {
  validarOpcion = parseFloat(prompt("Ingrese un número. (0 = SALIR)"));
  if (control) {
    maximo = validarOpcion;
    minimo = validarOpcion;
    control = false;
  }
  if (validarOpcion > maximo) {
    maximo = validarOpcion;
  } else if (validarOpcion < minimo) {
    minimo = validarOpcion;
  }
} while (validarOpcion != 0);
document.write(`Número Máximo = ${maximo} <br> Número Mínimo = ${minimo}`);
