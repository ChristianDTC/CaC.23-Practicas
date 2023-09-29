//4) Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal, asumiendo que trabaja todos los días hábiles y media jornada los sábados. 

let salarioHora, horasTrabajadas, salarioSemanal;

salarioHora = parseFloat(prompt("Ingrese el salario por hora"))
horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas por día"))
salarioSemanal = (salarioHora * horasTrabajadas) * 5 + (salarioHora * (horasTrabajadas / 2)) 

console.log("El salario semanal es de $" + salarioSemanal)