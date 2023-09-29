//3) Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres distintos para cierto alumno. La computadora debe mostrar la nota promedio.

let nota1, nota2, nota3, promedio;

nota1 = parseFloat(prompt("Ingrese la 1° nota"))
nota2 = parseFloat(prompt("Ingrese la 2° nota"))
nota3 = parseFloat(prompt("Ingrese la 3° nota"))
promedio = (nota1 + nota2 + nota3) /3
console.log("El promedio de las 3 notas ingresadas es:\n" + promedio)