//10) esNumeroPerfecto, que devuelva si un número entero dado como parámetro es o no perfecto.

let numero1;

function listaDivisores(numero1) {
  let mensaje = "";

  for (let i = 1; i < numero1; i++) {
    if (numero1 % i == 0) {
      mensaje +=  i.toString() + " +  " ;
    }
  }

  return mensaje;
}

function cantDivisores(numero1) {
  let sumaDivisores = 0;

  for (let i = 1; i < numero1; i++) {
    if (numero1 % i == 0) {
      sumaDivisores += i;
    }
  }
  return sumaDivisores;
}

function esNumeroPerfecto(numero1) {
  let totalDivisores, mensaje;
  if (numero1 > 0) {
    totalDivisores = cantDivisores(numero1);
    mensaje =
      numero1 == totalDivisores
        ? "es un número perfecto"
        : "NO es un número perfecto";
  } else {
    mensaje = "NO es un número perfecto, tienen que ser enteros positivos";
  }
  return mensaje;
}

numero1 = parseInt(
  prompt("Ingrese el número que quiere conocer sus divisores")
);

document.write(`El número ${numero1} ${esNumeroPerfecto(numero1)}`);
if (
  numero1 == 6 ||
  numero1 == 28 ||
  numero1 == 496 ||
  numero1 == 8128 ||
  numero1 == 33550336 ||
  numero1 == 8589869056 ||
  numero1 == 137438691328
) {
  document.write(
    `<br>${numero1} = ${listaDivisores(numero1)} = ${cantDivisores(numero1)}`
  );
}
