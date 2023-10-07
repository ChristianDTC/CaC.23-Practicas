//3) imprimirSimbolo, que imprima por consola n veces un caracter en la misma línea. Tanto n como el caracter se reciben como parámetro.

let caracter, cantidad;

function imprimirSimbolo(caracter, cantidad) {
    let resultado = "";
    for (let i = 0; i < cantidad; i++) {
        resultado += caracter;
    }
    return resultado;
}

caracter = prompt("Ingrese el caracter que desea mostrar");
cantidad = parseInt(prompt("Ingrese la cantidad de repeticiones"));

// OPCION 1
document.write(`Caracter: ${caracter} - Repeticiones: ${cantidad} = ${imprimirSimbolo(caracter, cantidad)}`)

/* OPCION 2
alert(caracter.repeat(cantidad));
*/