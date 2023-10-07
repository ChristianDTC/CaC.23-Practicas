//9) mostrarNPrimos, que muestre por la consola, separados por comas, los  primeros n números primos. El valor de n se recibe como parámetro.

let numero1;

function esPrimo(numero1) {
  let contador = 0,
    i = 2,
    control = true,
    mensaje = "NO es primo";
  if (numero1 < 2) {
    mensaje = false;
  } else if (numero1 < 4) {
    mensaje = true;
  } else {
    while (control && i < numero1) {
      contador = numero1 % i == 0 ? contador + 1 : contador + 0;
      control = contador == 1 ? false : true;
      i++;
    }
    mensaje = contador == 0 ? true : false;
  }
  return mensaje;
}

function mostrarNPrimos(cantidad) {
  let cadena = "";
  for (let i = 1; i <= cantidad; i++) {
    if (esPrimo(i)) {
      cadena += i.toString() + ", ";
    }
  }
  return cadena;
}

cantidad = parseInt(prompt("Ingrese el rango para conocer sus números primos"));
document.write(`Los números primos hasta ${numero1} son ${mostrarNPrimos (cantidad)}`);
