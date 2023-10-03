 //6) Realizá un programa que permita al usuario ingresar la edad y el sueldo de cierto empleado. La computadora muestra el monto del aporte al sindicato que se debe descontar del salario del empleado, según el siguiente cuadro: Escala salarial Porcentaje a descontar Menos de $20000 0.7% Entre $20000 y $29999 1.4% Entre $30000 y $39999 2.1% $40000 o más 2.8% Además, si la persona tiene 30 años o menos, se cobra un 30% adicional del valor del aporte. 

 let edad, sueldo, porcentajeDescuento, adicional, sindicato;

 edad = parseInt(prompt("Ingrese la edad"))
 sueldo = parseFloat(prompt("Ingrese el sueldo"))

if (sueldo < 20000) {
    porcentajeDescuento = sueldo * (0.7/100)
} else if (sueldo >= 20000 && sueldo < 30000) {
    porcentajeDescuento = sueldo * (1.4/100)
}else if (sueldo >= 30000 && sueldo < 40000) {
    porcentajeDescuento = sueldo * (2.1/100)
}else if (sueldo >= 40000) {
    porcentajeDescuento = sueldo * (2.8/100)
}

sindicato = edad < 30? (porcentajeDescuento * 1.3) : porcentajeDescuento
document.write(`El monto que debe aportal al sindicato es de $${sindicato}`)