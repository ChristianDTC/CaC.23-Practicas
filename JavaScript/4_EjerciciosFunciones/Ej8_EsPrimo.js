//8) esPrimo, que devuelva si un número entero dado como parámetro es o no primo.

let numero1;

function esPrimo(numero1) {
    let contador = 0, i = 2, control = true, mensaje = "NO es primo";
    if (numero1 < 2) {
        mensaje = "NO es primo, comienzan en el 2"
    } else if (numero1 <4){
        mensaje = "es primo"
    } else {
        while (control && (i < numero1)) {
            contador = numero1 % i == 0? (contador + 1) : (contador + 0);
            control = contador == 1? false : true;
            i++;
        }
        mensaje = control? "es primo" : "NO es primo"
    }
    return mensaje
}

numero1 = parseInt(prompt("Ingrese el número que quiere saber si es primo"));
document.write(`El número ${numero1} ${esPrimo(numero1)} `)