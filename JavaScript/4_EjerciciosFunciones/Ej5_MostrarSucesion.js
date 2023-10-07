//5) mostrarSucesion, que imprima por consola la sucesión de números inclusiva entre a y b, dados como parámetros.

let maximo, minimo;

function mostrarSucesion(maximo, minimo) {
    let cadena = "", control;
    if (maximo < minimo) {
        control = maximo
        maximo = minimo
        minimo = control
    }
    for (let i = minimo; i <= maximo; i++) {
        /*if (i < maximo) {
            cadena += i.toString() + ",  ";
        } else {
            cadena += i.toString();
        }*/
        cadena += i < maximo? (i.toString() + ",  ") : (i.toString());
    }
    return cadena
}

minimo = parseInt(prompt("Ingrese el rango minimo"));
maximo = parseInt(prompt("Ingrese el rango máximo"));

document.write(mostrarSucesion(maximo, minimo))