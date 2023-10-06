//19) Realizá un programa que permita la validación del ingreso a un sitio web. Teniendo ya precargados un nombre de usuario ("admin") y una contraseña ("123456"), el programa debe permitir al usuario ingresar sus credenciales. Si las mismas son erróneas, se volverán a pedir hasta un máximo de 3 intentos. Finalmente, la computadora debe mostrar alguno de los siguientes mensajes según sea el caso: "Acceso concedido" o "Se ha bloqueado la cuenta".

const USUARIO = "admin",
  CONTRASENIA = 123456;
let usuarioLogin,
  contraseniaLogin,
  mensaje = "SE HA BLOQUEADO LA CUENTA",
  contador = 0,
  intentosValidos = true;


do {
  contador++;
  usuarioLogin = prompt(`Ingrese el usuario`);
  if (usuarioLogin === USUARIO) {
    do {
      contraseniaLogin = parseInt(prompt(`Ingrese la clave`));
      if (contraseniaLogin === CONTRASENIA) {
        mensaje = "ACCESO CONCEDIDO";
      } else {
        if (3 - contador != 0) {
          alert(`CONTRASEÑA INVALIDA - QUEDAN ${3 - contador} INTENTOS`);
        }
        contador++;
      }
    } while (contraseniaLogin != CONTRASENIA && contador != 4);
  } else if (contador != 3) {
    alert(`USARIO INVALIDO - QUEDAN ${3 - contador} INTENTOS`);
  }
} while (
  usuarioLogin != USUARIO &&
  contador != 3 &&
  contraseniaLogin != CONTRASENIA
);

document.write(mensaje);

/*
while (intentosValidos && contador <= 3) {
  usuarioLogin = prompt(`Ingrese el usuario`);
  if (usuarioLogin === USUARIO) {
    contraseniaLogin = parseInt(prompt(`Ingrese la clave`));
    if (contraseniaLogin === CONTRASENIA) {
      mensaje = "ACCESO CONCEDIDO";
      intentosValidos = false;
    } else {
      if (i < 3) {
        alert(`CONTRASEÑA INVALIDA - QUEDAN ${3 - i} INTENTOS`);
      }
    }
  } else {
    if (i < 3) {
      alert(`USUARIO INVALIDO - QUEDAN ${3 - i} INTENTOS`);
    }
  }
  contador++;
}
document.write(mensaje);
*/