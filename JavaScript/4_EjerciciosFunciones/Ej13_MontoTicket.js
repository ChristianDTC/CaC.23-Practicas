//13) Realizá un programa que permita al usuario ingresar la cantidad de cierto producto y el precio unitario de dicho producto. Por cada carga debe preguntar si se desea seguir ingresando de la forma "¿Deseás ingresar otro artículo? [S/N]". La carga de datos finaliza cuando el usuario lo determine. La computadora debe mostrar el monto total del ticket.


let cantidadArticulo,
  precioArticulo,
  totalTicket = 0,
  validarOpcion;

function cantidadValida(cantidadArticulo) {
  do {
    cantidadArticulo = parseInt(prompt("Ingrese la cantidad del artículo"));
    if (cantidadArticulo < 1) {
      alert("LA CANTIAD TIENE QUE SER MAYOR A 0")
    }
  } while (cantidadArticulo < 1);
  return cantidadArticulo;
}

function precioValido(precioArticulo) {
  do {
    precioArticulo = parseFloat(prompt("Ingrese el precio del artículo"));
    if (precioArticulo <= 0) {
      alert("EL PRECIO TIENE QUE SER MAYOR A 0")
    }
  } while (precioArticulo <= 0);
  return precioArticulo
}

function deseaContinuar(validarOpcion) {
  do {
    validarOpcion = prompt("¿Deseás ingresar otro artículo? [S/N]").toUpperCase();
    if (validarOpcion != "S" && validarOpcion != "N") {
      alert("OPCION INVALIDA - SOLO PUEDE SER S/N");
    }
  } while (validarOpcion != "S" && validarOpcion != "N");
  return validarOpcion;
}

do {
  cantidadArticulo = cantidadValida(cantidadArticulo);
  precioArticulo = precioValido(precioArticulo);
  totalTicket += cantidadArticulo * precioArticulo
  validarOpcion = deseaContinuar(validarOpcion);
} while (validarOpcion != "N");

document.write(`El monto total del ticket es $${(totalTicket).toFixed(2)}`)