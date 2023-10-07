//6) esMultiplo, que devuelva si un número entero es múltiplo de otro. Ambos son  dados como parámetros.

let numero2, numero1;

function esDivisible(divisor) {
    return divisor != 0;
}

function esMultiplo(numero1, numero2) {
    let mensaje;
    if (esDivisible(numero2)) {
       mensaje = numero1 % numero2 == 0? `El número ${numero1} es multiplo de ${numero2}` : `El número ${numero1} NO es multiplo de ${numero2}`
    } else {
        mensaje = "El divisor no puede ser 0 (Cero)"
    }
    return mensaje
}

numero1 = parseInt(prompt("Ingrese el 1° número entero"));
numero2 = parseInt(prompt("Ingrese el 2° número entero"));

document.write(esMultiplo(numero1, numero2))