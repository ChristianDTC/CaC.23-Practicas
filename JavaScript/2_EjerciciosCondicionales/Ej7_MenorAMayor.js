// 7) Realizá un programa que permita al usuario ingresar tres números. La computadora debe mostrarlos ordenados de menor a mayor.

let numero1, numero2, numero3, medio, menor, mayor;

numero1 = parseInt(prompt("Ingrese el 1° número"));
numero2 = parseInt(prompt("Ingrese el 2° número"));
numero3 = parseInt(prompt("Ingrese el 3° número"));

if (numero1 == numero2 == numero3) {
  document.write(`Los 3 números son iguales = ${numero1}`);
} else {
  mayor = Math.max(numero1, numero2, numero3);
  menor = Math.min(numero1, numero2, numero3);
  if (numero1 < mayor && numero1 > menor) {
    medio = numero1;
  } else if (numero2 < mayor && numero2 > menor) {
    medio = numero2;
  } else {
    medio = numero3;
  }
  document.write(`Los número de menor a mayor son: ${menor} ${medio} ${mayor}`)
}
