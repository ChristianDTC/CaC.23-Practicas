//2) Realizá un programa que permita al usuario ingresar un número entero. La computadora debe informar el número opuesto1 y el número inverso2 del ingresado. 

let numero, opuesto, inverso;

numero = parseInt(prompt("Ingrese un número"))
opuesto = numero * -1
inverso = 1 / numero
console.log("El opuesto de " + numero + " es: " + opuesto)
console.log("El inverso de " + numero + " es: " + inverso)