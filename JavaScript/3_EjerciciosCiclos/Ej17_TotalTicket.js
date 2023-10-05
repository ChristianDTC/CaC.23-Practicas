//17) Realizá un programa que permita al usuario ingresar la cantidad de cierto artículo y el precio unitario de dicho artículo. Por cada carga debe preguntar si se desea seguir ingresando de la forma "¿Deseás ingresar otro artículo? [S/N]". La carga de datos finaliza cuando se detecta una 'n' o 'N'. Reutilizá el algoritmo realizado en el ejercicio 37) para validar la opción ingresada. La computadora debe mostrar el monto total del ticket. 

let cantidadArticulo,
  precioArticulo,
  totalTicket = 0;

do {
  cantidadArticulo = parseInt(prompt("Ingrese la cantidad del artículo"));
  precioArticulo = parseFloat(prompt("Ingrese el precio del artículo"));
  totalTicket += cantidadArticulo * precioArticulo
  do {
    validarOpcion = prompt("¿Deseás ingresar otro artículo? [S/N]").toUpperCase();
    if (validarOpcion != "S" && validarOpcion != "N") {
      alert("OPCION INVALIDA");
    }
  } while (validarOpcion != "S" && validarOpcion != "N");
} while (validarOpcion != "N");

document.write(`El monto total del ticket es $${totalTicket}`)