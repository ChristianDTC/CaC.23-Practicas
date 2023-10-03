//10) Realizá un programa que permita al usuario ingresar un número entero entre 1 y 12. La computadora debe mostrar por pantalla el nombre del mes del año que representa tal número. Si se ingresa un número fuera de rango, debe mostrar un error.

let mesNumero, mesString;

mesNumero = parseInt(prompt("Ingrese el mes del año con un número"));

switch (mesNumero) {
  case 1:
    mesString = "Enero";
    break;
  case 2:
    mesString = "Febrero";
    break;
  case 3:
    mesString = "Marzo";
    break;
  case 4:
    mesString = "Abril";
    break;
  case 5:
    mesString = "Mayo";
    break;
  case 6:
    mesString = "Junio";
    break;
  case 7:
    mesString = "Julio";
    break;
  case 8:
    mesString = "Agosto";
    break;
  case 9:
    mesString = "Septiembre";
    break;
  case 10:
    mesString = "Octubre";
    break;
  case 11:
    mesString = "Noviembre";
    break;
  case 12:
    mesString = "Diciembre";
    break;
  default:
    mesString = "INGRESO UN NUMERO INVALIDO, DEBE SER ENTRE 1 Y 12"
    break;
}
document.write(mesString)