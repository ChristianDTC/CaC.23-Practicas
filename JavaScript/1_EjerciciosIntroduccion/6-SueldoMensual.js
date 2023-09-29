//6) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000 más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo mensual del vendedor y mostrarlo.


let valorUnitario, cantidadArticulos, sueldoMensual, sueldoFijo, comision;

sueldoFijo = 14000
comision = 1 + (16/100)
valorUnitario = parseFloat(prompt("Ingrese el valor unitario del artículo:"))
cantidadArticulos = parseInt(prompt("Ingrese la cantidad vendida del artículo:"))
sueldoMensual = ((valorUnitario * cantidadArticulos)* comision) + sueldoFijo

console.log(`El sueldo mensual del vendedor es de $${sueldoMensual}`)