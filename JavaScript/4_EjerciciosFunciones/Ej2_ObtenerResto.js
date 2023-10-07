//2) obtenerResto, que devuelva el resto del cociente entre dos números enteros dados como parámetros (sin usar el operador %).

let divisor, dividendo, cociente, mensaje;

function esDivisible(divisor) {
  return divisor != 0;
}

function obtenerResto(dividendo, divisor) {
  cociente = Math.trunc(dividendo / divisor);
  return dividendo - (divisor * cociente);
}

divisor = parseInt(prompt("Ingrese el número divisor"));
dividendo = parseInt(prompt("Ingrese el número dividendo"));

// OPCION 2 condicional ternario
mensaje = esDivisible(dividendo)? `Divisor: ${divisor} /  Dividendo: ${dividendo} = Cociente ${Math.trunc(divisor / dividendo)}  - Resto ${obtenerResto(divisor, dividendo)}` : "El divisor no puede ser 0 (Cero)";

/* OPCION 1 - if/else
if (esDivisible(dividendo)) {
    mensaje = `Divisor: ${divisor} /  Dividendo: ${dividendo} = Cociente ${Math.trunc(divisor / dividendo)}  - Resto ${obtenerResto(divisor, dividendo)}`;
} else {
    mensaje = "El divisor no puede ser 0 (Cero)"
}
*/
document.write(mensaje)