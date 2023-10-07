//7) cantDivisores, que devuelva la cantidad de divisores que posea un número  entero dado como parámetro.

let numero1;

function cantDivisores(numero1) {
  let mensaje = "";
  if (numero1 == 0) {
    mensaje = "NO tiene divisores";
  } else {
    for (let i = 1; i <= numero1; i++) {
      if (numero1 % i == 0) {
        mensaje += i < numero1? (i.toString() + ",  ") : i.toString();
      }
    }
  }
  return mensaje;
}

numero1 = parseInt(
  prompt("Ingrese el número que quiere conocer sus divisores")
);

document.write(`Divisores del número ${numero1} = ${cantDivisores(numero1)}`);
