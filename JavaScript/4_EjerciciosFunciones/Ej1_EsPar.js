//1) esPar, que devuelva si un número entero dado como parámetro es par o no.

let numeroIngresado;

function esPar(params) {
    return params % 2 == 0? "PAR" : "IMPAR"
}

numeroIngresado = parseInt(prompt("Ingrese el número que desea saber si es par"))
document.write(`El número ${numeroIngresado} es ${esPar(numeroIngresado)}`);

