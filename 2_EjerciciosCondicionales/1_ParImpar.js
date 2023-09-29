//1) Realizá un programa que permita al usuario ingresar un número entero. La computadora debe indicar si se trata de un número par o impar.

let numero, parImpar;

numero = parseInt(prompt("Ingrese un número entero"))

// OPCION 1 If/else clásico
if (numero % 2 == 0) {
    parImpar = "PAR"
} else {
    parImpar = "IMPAR" 
}
console.log(`OPCION 1\nEl número es ${parImpar}`)

//OPCION 2 condición ternaria
parImpar = numero % 2 == 0? "PAR" : "IMPAR"

console.log(`OPCION 2\nEl número es ${parImpar}`)