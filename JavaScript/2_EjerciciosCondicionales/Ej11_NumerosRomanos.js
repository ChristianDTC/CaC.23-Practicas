//11) Realizá un programa que permita al usuario ingresar una letra, correspondiente a un dígito del sistema de numeración romano6. La computadora debe mostrar su correspondiente valor decimal. Si se ingresa una letra inexistente, la computadora debe informar que no existe tal dígito.

let numeroRomano, numero;

numeroRomano = prompt(
  "Ingrese un dígito correspondiente del sistema de numeración romano"
);

switch (numeroRomano.toUpperCase()) {
  case "I":
    numero = 1;
    break;
  case "V":
    numero = 5;
    break;
  case "X":
    numero = 10;
    break;
  case "L":
    numero = 50;
    break;
  case "C":
    numero = 100;
    break;
  case "D":
    numero = 500;
    break;
  case "M":
    numero = 1000;
    break;

  default:
    numero = "SOLO SE PERMITE UN DIGITO ( I - V - X - L - C - D - M )"
    break;
}
document.write(numero)